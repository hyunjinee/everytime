import { Response, Request, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
  // ! body 에 trim을 적용할 변수의 예외
  const exceptions: string[] = []
  Object.keys(req.body).forEach((key) => {
    if (!exceptions.includes(key) && typeof req.body[key] === "string") {
      req.body[key] = req.body[key].trim()
    }
  })
}
