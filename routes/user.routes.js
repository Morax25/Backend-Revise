import { Router } from "express";
import { signUp } from "../controller/signup.controller.js";

const userRouter = Router();

userRouter.post("/", signUp);
userRouter.get("/", (req, res) => {
  res.send({ title: "get all users" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "get single user" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete user" });
});

export default userRouter;
