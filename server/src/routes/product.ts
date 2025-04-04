import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/product";

const productRoute = Router();
productRoute.get("/products", getProducts);
productRoute.post("/products", createProduct);
productRoute.delete("/product/:id", deleteProduct);
export default productRoute;
