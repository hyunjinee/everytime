require("dotenv").config()

const express = require("express")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const app = express()

const connect = mongoose
  .connect(process.env.MONGO_URI, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err))

app.use(helmet())
app.use(cookieParser())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`))
