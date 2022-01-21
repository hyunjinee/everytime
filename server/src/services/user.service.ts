import User from "../models/user"
import { Request, Response } from "express"
import StatusCodes from "http-status-codes"

const { BAD_REQUEST, OK } = StatusCodes

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    return res.status(OK).json({ users })
  } catch (error) {
    return res.status(BAD_REQUEST).json(error)
  }
}

export const getOneUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    return res.status(OK).json({ user })
  } catch (error) {
    return res.status(BAD_REQUEST).json(error)
  }
}

export const findOneUser = async (req: Request, res: Response) => {
  const { username, password } = req.query
  try {
    const user = await User.findOne({ username, password })
    return res.status(OK).json(user ?? { message: "error" })
  } catch (error) {
    return res.status(BAD_REQUEST).json(error)
  }
}

export const createUser = async (req: Request, res: Response) => {
  const userData = req.body
  try {
    if (Object.keys(userData).length === 0)
      throw new Error("no user data in body")
    const user = await User.create(userData)
    return res.status(OK).json({ user })
  } catch (error) {
    return res.status(BAD_REQUEST).json(error)
  }
}