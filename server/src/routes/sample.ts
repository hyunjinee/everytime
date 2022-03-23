import { Router } from "express";
import { makeArticles } from "../services/sample.service";

const sampleRouter = Router();

sampleRouter.post("/makeArticles", makeArticles);

export default sampleRouter;
