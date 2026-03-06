import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      trim: true,
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      min: 0,
      type: Number,
      required: true,
    },
    category: {
      trim: true,
      type: String,
      required: true,
    },
    sizes: [{ type: String, required: true }],
    images: [{ type: String, required: true }],
    stock: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
productSchema.index({ isActive: 1 });
productSchema.index({ price: 1, category: 1 });
productSchema.index({ createdAt: -1, _id: -1 });
productSchema.index({ name: "text", description: "text" });

export const Product = mongoose.model("Product", productSchema);
