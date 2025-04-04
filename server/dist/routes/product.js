"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const productRoute = (0, express_1.Router)();
productRoute.get("/products", product_1.getProducts);
productRoute.post("/products", product_1.createProduct);
productRoute.delete("/product/:id", product_1.deleteProduct);
exports.default = productRoute;
