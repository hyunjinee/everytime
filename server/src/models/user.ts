import mongoose, { NativeError } from "mongoose"

const jwt = require("jsonwebtoken")
const SALT_ROUNDS = 10

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    maxLength: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 30,
  },
  nickname: {
    type: String,
    required: true,
    maxLength: 20,
  },
  email: {
    type: String,
  },

  entranceYear: {
    type: String,
  },
  school: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

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

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User

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

// const User = mongoose.models.User || mongoose.model("User", userSchema)

// export default User
