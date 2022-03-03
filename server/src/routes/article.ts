import { Router } from "express";
import { getAllArticles, createArticle } from "../services/article.service";
import protect from "../middlewares/auth";

const articleRouter = Router();

articleRouter.get("/getAllArticles", getAllArticles);
articleRouter.post("/createArticle", protect, createArticle);

export default articleRouter;
