import mongoose from "mongoose"

export default async (): Promise<void> => {
  await mongoose.connect("mongodb://127.0.0.1:27017/everytime", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  // console.log("DB CONNECTED")
}

// import mongoose from "mongoose"

// const MONGO_URI = process.env.MONGO_URI

// export default async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017/everytime", {})
//   const db = mongoose.connection
//   db.once("open", () => console.log("DATABASE CONNECTED"))
//   db.on("error", (err) => console.error(err))
// }

// mongoose.connect(MONGO_URI, {})

// const connectDB = (url) => {
//     return mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
// }

// module.exports = connectDB
