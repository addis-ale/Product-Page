import { z } from "zod";
export const createProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  image: z.string().url(),
  price: z.number().gt(0, "Price must greater than 0"),
});
