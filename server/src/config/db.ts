import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    if (process.env.MONGODB_URL) {
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`Connected: ${conn.connection.host}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`);
    }
  }
};
