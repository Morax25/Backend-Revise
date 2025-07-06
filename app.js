import express, { urlencoded } from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import subRoute from "./routes/sub.routes.js";
import authRouter from "./routes/auth.routes.js";
import dbConnect from "./database/dbConnect.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running at http://localhost:${PORT}`);
});
