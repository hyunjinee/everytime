import { Router } from "express";
import userRouter from "./user";
import sampleRouter from "./sample";
import articleRouter from "./article";

const baseRouter = Router();

baseRouter.use("/user", userRouter);
baseRouter.use("/article", articleRouter);
baseRouter.use("/sample", sampleRouter);

export default baseRouter;
