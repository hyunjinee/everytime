import { Router } from "express";
import userRouter from "./user";

const baseRouter = Router();

// baseRouter.use("/", (req, res) => res.send("hi"));
baseRouter.use("/user", userRouter);

export default baseRouter;