import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";
dotenv.config();
const app = express();
app.use(express());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  connectDb();
  console.log("app is working");
});
