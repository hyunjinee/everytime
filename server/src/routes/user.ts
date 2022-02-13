import { getAllUsers, createUser } from "./../services/user.service";
import { Router } from "express";

const userRouter = Router();

// userRouter.get("/", (req, res) => {
//   res.send("hello world");
// });
userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/register", createUser);
// userRouter.post("/createUser", createUser);
userRouter.post("/signup");
userRouter.post("/signin");
userRouter.post("/signout");
userRouter.patch("/profile");

export default userRouter;
