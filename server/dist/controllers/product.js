"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProducts = exports.createProduct = void 0;
const product_validator_1 = require("../validators/product.validator");
const product_model_1 = __importDefault(require("../model/product.model"));
const zod_1 = require("zod");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = product_validator_1.createProductSchema.parse(req.body);
    const newProduct = new product_model_1.default(validatedData);
    try {
        yield newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: error.flatten().fieldErrors,
            });
        }
        else if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
        else {
            console.log("An unknown error occurred");
        }
    }
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("the get product routes");
});
exports.getProducts = getProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteProduct = deleteProduct;
