import mongooseLoader from "./mongoose"
import expressLoader from "./express"
import { Application } from "express"

export default async (app: Application): Promise<void> => {
  await mongooseLoader()
  console.log("DB CONNECTED ✅")
  expressLoader(app)
  console.log("Express initialized ✅")
}
