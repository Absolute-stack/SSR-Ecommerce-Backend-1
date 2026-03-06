import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMyOrders,
  guestOrderLookup,
} from "../controllers/orderController.js";
import { protect, adminProtect, optionalAuth } from "../middleware/protect.js";

export const orderRouter = express.Router();

orderRouter.get("/all", adminProtect, getAllOrders);
orderRouter.post("/create", optionalAuth, createOrder);
orderRouter.get("/me", protect, getMyOrders);
orderRouter.get("/guestOrderLookup", guestOrderLookup);
orderRouter.delete("/delete/:id", adminProtect, deleteOrder);
