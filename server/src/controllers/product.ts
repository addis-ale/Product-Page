import { Request, Response } from "express";
import { createProductSchema } from "../validators/product.validator";
import product from "../model/product.model";
import { date, ZodError } from "zod";
import mongoose from "mongoose";
export const createProduct = async (req: Request, res: Response) => {
  const validatedData = createProductSchema.parse(req.body);
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
  try {
    const products = await product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedProduct = await product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedProduct = await product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Updated Successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
