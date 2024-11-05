import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongo connected :$(conn.connection.host)`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};
