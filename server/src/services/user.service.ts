import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/user";
import StatusCodes from "http-status-codes";

const { BAD_REQUEST, OK } = StatusCodes;

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(OK).json({ users });
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.status(OK).json({ user });
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const findOneUser = async (req: Request, res: Response) => {
  const { username, password } = req.query;
  try {
    const user = await User.findOne({ username, password });
    return res.status(OK).json(user ?? { message: "error" });
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  console.log(userData, "zz");
  try {
    if (Object.keys(userData).length === 0)
      throw new Error("no user data in body");
    const user = await User.create(userData);

    // const user = new User(userData);
    // user.serialize();
    // console.log(user);
    // user.serialize();
    return res.status(OK).json(user);
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const createManyUser = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    if (Object.keys(userData).length === 0)
      throw new Error("no user data in body");
    for (let i = 0; i < userData.length; i++) {
      const user = await User.create(userData[i]);
    }
    return res.status(OK).json({ success: true });
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const register = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  try {
    const exists = await User.findOne({ id, password });
    if (exists) {
      return;
    }
    // const token = user.generateToken();
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
    });
  } else {
    res.status(400).json({ message: "아이디 비밀번호가 맞지 않습니다." });
  }
};

export const testThrowingError = (req: Request, res: Response) => {
  // throw new Error("테스트에러용");
  return res.json({ message: "test" });
};
