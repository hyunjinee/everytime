import {
  getAllUsers,
  createUser,
  testThrowingError,
  login,
} from "./../services/user.service";
import { Router } from "express";
import user from "../models/user";

const userRouter = Router();

// userRouter.get("/", (req, res) => {
//   res.send("hello world");
// });
userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/register", createUser);
// userRouter.post("/createUser", createUser);
userRouter.post("/login", login);
userRouter.post("/signup");
userRouter.post("/signin");
userRouter.post("/signout");
userRouter.patch("/profile");
userRouter.get("/test", testThrowingError);

export default userRouter;
