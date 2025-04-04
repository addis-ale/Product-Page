import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product";

const productRoute = Router();
productRoute.get("/products", getProducts);
productRoute.post("/products", createProduct);
productRoute.delete("/product/:id", deleteProduct);
productRoute.put("/product/:id", updateProduct);
export default productRoute;
