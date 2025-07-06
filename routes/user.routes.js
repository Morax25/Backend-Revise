import { Router } from "express";

const userRouter = Router();

userRouter.post("/:", (req, res) => {
  res.send({ title: "create a new user" });
});
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
