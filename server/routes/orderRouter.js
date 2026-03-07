import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMyOrders,
  guestOrderLookup,
  updateDeliveryStatus,
  getOrderById,
} from "../controllers/orderController.js";
import { protect, adminProtect, optionalAuth } from "../middleware/protect.js";

export const orderRouter = express.Router();

orderRouter.get("/me", protect, getMyOrders);
orderRouter.get("/guest-lookup", guestOrderLookup);
orderRouter.get("/all", adminProtect, getAllOrders);
orderRouter.post("/create", optionalAuth, createOrder);
orderRouter.get("/:id", getOrderById);
orderRouter.delete("/delete/:id", adminProtect, deleteOrder);
orderRouter.patch("/update/:id", adminProtect, updateDeliveryStatus);
