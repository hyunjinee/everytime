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

// import mongoose, {
//   NativeError,
//   Document,
//   Schema,
//   model,
//   Model,
// } from "mongoose";
// import jwt from "jsonwebtoken";
// import validator from "validator";
// import bcrypt from "bcrypt";

// const SALT_ROUNDS = 10;

// interface IUser {
//   id: string;
//   password: string;
//   nickname: string;
//   school: string;
//   createdAt: Date;
//   entranceYear: string;
//   tokens?: [string];
//   // email: string;
//   // tokenExpiration: number;
// }

// interface UserDocument extends IUser, Document {}

// const userSchema: Schema = new Schema({
//   id: {
//     type: String,
//     required: true,
//     maxLength: 20,
//     minlength: 1,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     maxLength: 30,
//   },
//   nickname: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   entranceYear: {
//     type: String,
//   },
//   school: {
//     type: String,
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//       },
//     },
//   ],
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
//   // tokenExpiration: {
//   //   type: Number,
//   // },
//   // email: {
//   //   type: String,
//   //   trim: true,
//   //   validate: {
//   //     validator: validator.isEmail,
//   //     message: "{VALUE} is not a valid email",
//   //   },
//   // },
// });

// userSchema.methods.generateToken = async () => {
//   // const user: UserDocument = this;
//   const token = jwt.sign(
//     { _id: this._id },
//     process.env.TOKEN_SECRET || "SECRET"
//   );
// };

// const User = model<UserDocument>("User", userSchema);

// export default User;

// mongoose.models.User || mongoose.model<IUser, IUserModel>("User", userSchema);
// userSchema.methods.generateToken = async (
//   secret_key?: string,
//   expiresTime?: string
// ) => {
//   const user = this;
//   const token = jwt.sign(
//     { _id: user.id.toHexString() },
//     process.env.TOKEN_SECRET || "SECRETKEY",
//     {
//       expiresIn: expiresTime,
//     }
//   );
// };

// import bcrypt from "bcrypt"
// import mongoose, { NativeError } from "mongoose"
// const jwt = require("jsonwebtoken")
// const SALT_ROUNDS = 10

// const userSchema = mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     maxLength: 20,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     maxLength: 30,
//   },
//   nickname: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   email: {
//     type: String,
//   },
//   nickname: {
//     type: String,
//     required: true,
//     maxLength: 20,
//   },
//   entranceYear: {
//     type: String,
//   },
//   school: {
//     type: String,
//   },
//   token: {
//     type: String,
//   },
//   tokenExpiration: {
//     type: Number,
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// })

// const User = mongoose.models.User || mongoose.model("User", userSchema)

// export default User
// userSchema.pre("save", async (next) => {
//   try {
//     const user = this
//     const salt = await bcrypt.genSalt(SALT_ROUNDS)
//     const hashedPassword = await bcrypt.hash(user.password, salt)
//     user.password = hashedPassword
//     next()
//   } catch (error) {
//     if (error instanceof NativeError) {
//       next(error)
//     }
//   }
// })
// userSchema.statics.findByToken = async (token, cb) => {
//   const user = this;
//   // 두번째 인자 process.env.SECRET
//   jwt.verify(token, "secretToken", function (err, decode) {
//     user.findOne({ _id: decode, token: token }, function (err, user) {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };

// type UserDocument = IUser & Document;
// interface IUserDoc extends IUser, Document {
// generateToken: (secret_key?: string, expiresTime?: string) => Promise<string>;
// }
// type IUserDoc = IUser & Document;
// interface IUserModel extends Model<IUserDoc> {
//   findByToken: (token: string) => Promise<void>;
//   // findByCredentials: (email: string, password: string) => any;
// }

// userSchema.statics.findByToken = (token: string) => {
//   let user = this;
//   let decoded: any;
//   try {
//     decoded = jwt.verify(token, process.env.TOKEN_SECRET || "SECRET");
//   } catch (error) {
//     console.log(error);
//     return Promise.reject("rejected");
//   }
//   return User.findOne({
//     _id: decoded._id,
//     "tokens.token": token,
//     "tokens.access": "auth",
//   });
// };

// userSchema.methods.generateToken = (cb) => {
//   let user = this;
//   let token = jwt.sign(
//     user._id.toHexString(),
//     process.env.SECRET_TOKEN || "SECRET"
//   );
// };
