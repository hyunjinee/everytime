import { Router } from "express";
import { makeArticles } from "../services/sample.service";

// ! 이 라우터는 샘플 데이터를 넣기 위한 라우터입니다. 실제 서비스에서 사용하지 않습니다.
const sampleRouter = Router();

sampleRouter.post("/makeArticles", makeArticles);

export default sampleRouter;
