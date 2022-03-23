import { Request, Response } from "express";
import bcrypt from "bcrypt";
import StatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";

import User from "../models/user";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

// ! 토큰 생성 메서드
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

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
    return res.status(CREATED).json({ user });
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
  try {
    if (Object.keys(userData).length === 0)
      throw new Error("no user data in body");
    if (Object.keys(userData).length === 0)
      return res
        .status(BAD_REQUEST)
        .json({ error: true, message: "아이디 비밀번호를 입력해주세요." });

    const checkUser = await User.findOne({
      nickname: userData.nickname,
    });
    if (checkUser)
      return res
        .status(BAD_REQUEST)
        .json({ error: true, message: "이미 존재하는 유저 닉네임입니다." });

    const checkId = await User.findOne({ id: userData.id });
    if (checkId)
      return res
        .status(BAD_REQUEST)
        .json({ error: true, message: "이미 존재하는 아이디 입니다." });
    // if (checkUser) throw new Error("user already exists");
    const user = await User.create(userData);
    return res.status(OK).json({
      id: user.id,
      nickname: user.nickname,
    });
  } catch (error) {
    console.log(error);
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
    res.status(OK).json({
      id: user.id,
      nickname: user.nickname,
      token: generateToken(user.id),
    });
  } else {
    res
      .status(400)
      .json({ error: true, message: "아이디 비밀번호가 맞지 않습니다." });
  }
};

export const testThrowingError = (req: Request, res: Response) => {
  // throw new Error("테스트에러용");
  return res.json({ message: "test" });
};
