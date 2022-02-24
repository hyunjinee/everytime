import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import Article from "../models/article";

const { BAD_REQUEST, OK } = StatusCodes;

export const makeArticles = async (req: Request, res: Response) => {
  try {
    const articles = req.body;
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
      // const article = await Article.create(articles[i]);
      await Article.create(articles[i]);
    }

    return res.status(OK).json({ message: "success" });
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};
