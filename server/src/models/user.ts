import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export interface IUser {
  email: string;
  password: string;
  serialize: () => object;
}

interface UserDocument extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    maxLength: 50,
    unique: 1,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  nickname: {
    type: String,
  },
  school: {
    type: String,
  },
  entranceYear: {
    type: String,
  },
});

userSchema.index({ email: 1 });

userSchema.pre("save", async function (this: UserDocument, next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
});

// set hashedPassword to document
userSchema.methods.setPassword = async function (unhashedPassword: string) {
  const hashedPassword = await bcrypt.hash(unhashedPassword, 10);
  this.password = hashedPassword;
};

// Compare a candidate password with the user's password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

// 후보 비밀번호와 해쉬된 값과 같은지 체크
userSchema.methods.checkPassword = async function (candidatePassword: string) {
  const result = await bcrypt.compare(candidatePassword, this.password);
  return result;
};

// 패스워드 정보 삭제 및 serialize
userSchema.methods.serialize = function () {
  console.log("실행");
  const data = this.toJSON();
  delete data.password;
  return data;
};

// token을 이용해서 사용자를 찾을 수 있는 메서드
userSchema.statics.findByToken = function (token: string, callback) {
  let user = this;
  jwt.verify(token, "secret", function (err, decoded) {
    user.findOne(
      { _id: decoded, token: token },
      function (err: any, user: UserDocument) {
        if (err) return callback(err);
        callback(null, user);
      }
    );
  });
};

// nickname으로 사용자 찾을 수 있는 메서드
userSchema.statics.findByNickname = function (nickname: string) {
  return this.findOne({ nickname });
};
/*
 * 모델 메서드: 모델에서 사용할 수 있는 함수를 의미하며 두가지 종류가 있습니다.
 * 첫번째는 인스턴스 메서드로 모델을 통해 만든 문서 인스턴스에서 사용할 수 있는 함수입니다.
 * 두번째는 스태틱 메서드로 모델에서 바로 사용할 수 있는 함수를 의미합니다.
 * 인스턴스 메서드를 작성할 때는 화살표함수가 아닌, function 키워드를 이용해서 작성해야합니다. 함수 내부에서
 * this에 접근해야 하기 때문인데, 여기서 this는 문서 인스턴스를 가리킵니다. 화살표 함수를 사용하면 this는 문서 인스턴스를 가리키지
 * 못하게 됩니다.
 */

// ! 가장 중요한 점은 methods를 사용할 때는 이 method를 호출한 객체가 method내에서 this가 되고,
// ! statics를 사용할 때는 이 statics를 호출한 객체에 상관없이 this가 모델 자체가 된다는 것입니다.

export default mongoose.model<UserDocument>("User", userSchema);
