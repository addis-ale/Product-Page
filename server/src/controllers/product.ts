import { Request, Response } from "express";
import { createProductSchema } from "../validators/product.validator";
import product from "../model/product.model";
import { ZodError } from "zod";
export const createProduct = async (req: Request, res: Response) => {
  const validatedData = createProductSchema.safeParse(req.body);
  const newProduct = new product(validatedData);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: error.flatten().fieldErrors,
      });
    } else if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {
      console.log("An unknown error occurred");
    }
  }
};
export const getProducts = async (req: Request, res: Response) => {
  res.send("the get product routes");
};
export const deleteProduct = async (req: Request, res: Response) => {};
