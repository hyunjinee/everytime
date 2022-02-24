import { Router } from "express";
import { getAllArticles } from "../services/article.service";

const articleRouter = Router();

articleRouter.get("/getAllArticles", getAllArticles);

export default articleRouter;
