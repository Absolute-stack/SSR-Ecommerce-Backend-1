import express from "express";
import { adminProtect } from "../middleware/protect.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  adminGetProducts,
  getProducts,
  getProductById,
  getProductFilters,
} from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";

export const productRouter = express.Router();

productRouter.get("/all", getProducts);
productRouter.get("/filters", getProductFilters);
productRouter.get("/admin/all", adminProtect, adminGetProducts);
productRouter.post(
  "/create",
  adminProtect,
  upload.array("images", 5),
  createProduct,
);
productRouter.patch(
  "/update/:id",
  adminProtect,
  upload.array("images", 5),
  updateProduct,
);
productRouter.delete("/delete/:id", adminProtect, deleteProduct);
productRouter.get("/:id", getProductById);
