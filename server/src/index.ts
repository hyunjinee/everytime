import "dotenv/config"
import express from "express"
import loaders from "./loaders"

const PORT = process.env.PORT || 5000

const start = async () => {
  const app = express()
  await loaders(app)
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
}

start()
// const express = require("express")
// const helmet = require("helmet")
// const cookieParser = require("cookie-parser")
// const mongoose = require("mongoose")
// const app = express()

// const connect = mongoose
//   .connect(process.env.MONGO_URI, {
//     maxPoolSize: 50,
//     wtimeoutMS: 2500,
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("DB CONNECTED"))
//   .catch((err) => console.log(err))

// app.use(helmet())
// app.use(cookieParser())

// const PORT = process.env.PORT || 3333
// app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`))
