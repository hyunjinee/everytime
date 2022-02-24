import { Request, Response } from "express";

import StatusCodes from "http-status-codes";

import Article from "../models/article";

const { BAD_REQUEST, OK } = StatusCodes;

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.find();
    return res.status(OK).json(articles);
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};
