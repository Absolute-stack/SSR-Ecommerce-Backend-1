import express from "express";
import { optionalAuth } from "../middleware/protect.js";
import {
  initializePayment,
  paystackWebhook,
  verifyPayment,
} from "../controllers/paystackController.js";

export const paystackRouter = express.Router();

paystackRouter.post("/initialize", optionalAuth, initializePayment);
paystackRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  paystackWebhook,
);
paystackRouter.get("/verify", verifyPayment);
