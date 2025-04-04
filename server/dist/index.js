"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const product_1 = __importDefault(require("./routes/product"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
//Routes
app.use("/api", product_1.default);
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    (0, db_1.connectDb)();
    console.log("app is working");
});
