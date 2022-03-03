import { Request, Response } from "express";

import StatusCodes from "http-status-codes";

import Article from "../models/article";

const { BAD_REQUEST, OK } = StatusCodes;

export const getAllArticles = async (req: Request, res: Response) => {
  console.log(req.query, "?");
  const currentPage: number = (req.query.page || 0) as number;
  const postsPerPage = 20;
  try {
    const articles = await Article.find()
      .sort({ createdAt: -1 })
      .limit(postsPerPage)
      .skip(currentPage * postsPerPage);
    return res.status(OK).json(articles);
  } catch (error) {
    return res.status(BAD_REQUEST).json(error);
  }
};

export const createArticle = async (req: Request, res: Response) => {
  try {
    const article = await Article.create(req.body);
    return res.status(OK).json(article);
  } catch (error) {
    return res
      .status(BAD_REQUEST)
      .json({ error: true, message: "글 작성에 실패했습니다." });
  }
};

export const getOneArticle = async (req: Request, res: Response) => {};

export const updateArticle = async (req: Request, res: Response) => {};
