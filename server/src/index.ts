import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";
import productRoute from "./routes/product";
dotenv.config();
const app = express();
//Middleware
app.use(express.json());
//Routes
app.use("/api", productRoute);
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  connectDb();
  console.log("app is working");
});
