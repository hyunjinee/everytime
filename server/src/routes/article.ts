import { Router } from "express";

import protect from "../middlewares/auth";
import {
  getAllArticles,
  createArticle,
  getOneArticle,
} from "../services/article.service";

const articleRouter = Router();

articleRouter.get("/getAllArticles", getAllArticles);
articleRouter.get("/getOneArticle/:articleNumber", getOneArticle);
articleRouter.post("/createArticle", protect, createArticle);

export default articleRouter;
