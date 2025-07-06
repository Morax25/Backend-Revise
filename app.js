import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import subRoute from "./routes/sub.routes.js";
import authRouter from "./routes/auth.routes.js";
import dbConnect from "./database/dbConnect.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subRoute);

app.listen(PORT, async () => {
  console.log(`the server is running on local host http://localhost:${PORT}`);
  await dbConnect();
});
