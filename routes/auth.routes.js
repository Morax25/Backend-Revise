import { Router } from "express";
const authRouter = Router();

authRouter.get("/Sign Out", (req, res) => {
  res.send({
    message: "Sign Up",
  });
});
authRouter.get("/Sign in", (req, res) => {
  res.send({
    message: "Sign in",
  });
});
authRouter.get("/", (req, res) => {
  res.send({
    message: "Sign Out",
  });
});

export default authRouter;
