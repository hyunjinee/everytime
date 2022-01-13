import express, { Application } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import baseRouter from "../routes"
import helmet from "helmet"
export default (app: Application): void => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(helmet())

  // Router
  app.use("/", baseRouter)
}
