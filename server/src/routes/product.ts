import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product";

const productRoute = Router();
productRoute.get("/products", getProducts);
productRoute.post("/products", createProduct);
productRoute.delete("/product/:id", deleteProduct);
productRoute.put("/product/:id", updateProduct);
productRoute.get("/product/:id", getProductById);
export default productRoute;
