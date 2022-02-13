import { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

const { ObjectId } = mongoose.Types

export default (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      error: "잘못된 요청입니다.",
    })
  }
  next()
}
