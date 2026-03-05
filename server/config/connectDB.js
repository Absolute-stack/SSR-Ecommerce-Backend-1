import "dotenv/config";
import mongoose from "mongoose";

export async function connectDB() {
  try {
    const DB = process.env.DB;
    if (!DB) throw new Error("DB not found in .env");
    mongoose.connection.on("connected", () =>
      console.log(`MongoDB connected successfully`),
    );
    await mongoose.connect(DB);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "MongoDB connection error",
    });
  }
}
