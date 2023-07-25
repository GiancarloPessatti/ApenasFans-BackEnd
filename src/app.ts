import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from "./errors/error";
import userRouter from "./routes/users.route";

const app = express();
app.use(express.json());
app.use(cors());
app.use("", userRouter);

app.use(errorHandler);

export default app;
