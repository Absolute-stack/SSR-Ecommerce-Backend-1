import "dotenv/config";
import axios from "axios";
import crypto from "crypto";
import { Order } from "../models/orderModel.js";
import { markOrderAsPaid } from "./orderController.js";

const CLIENT_URL = process.env.CLIENT_URL;
const PAYSTACK_BASE = process.env.PAYSTACK_BASE;
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET;

export async function initializePayment(req, res) {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId).lean();
    if (!order)
      return res.status(400).json({
        success: false,
        message: "Order not found",
      });

    if (order.paymentStatus === "paid")
      return res.status(400).json({
        success: false,
        message: "Order already paid",
      });

    const reference = `Order_${order._id}_${Date.now()}`;

    const response = await axios.post(
      `${PAYSTACK_BASE}/transaction/initialize`,
      {
        email: order.customer.email,
        amount: Math.round(order.total * 100),
        reference,
        callback_url: `${CLIENT_URL}/order-confirmation?reference=${reference}`,
        metadata: {
          orderId,
          name: order.customer.name,
          email: order.customer.email,
          shippingAddress: {
            city: order.shippingAddress.city,
            phone: order.shippingAddress.phone,
            address: order.shippingAddress.address,
            country: order.shippingAddress.country,
            fullname: order.shippingAddress.fullname,
          },
          totalAmount: order.totalAmount,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
      },
    );
    await Order.findByIdAndUpdate(orderId, { paystackReference: reference });
    return res.status(200).json({
      reference,
      success: true,
      AuthorizationURL: response.data.data.authorization_url,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function paystackWebhook(req, res) {
  try {
    const signature = req.headers["x-paystack-signature"];
    const expectedSignature = crypto
      .createHmac("sha512", PAYSTACK_SECRET)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (signature !== expectedSignature) {
      return res.status(400).json({
        success: false,
        message: "Invalid signature",
      });
    }

    const event = req.body;

    if (event.event === "charge.success") {
      const { reference } = event.data;

      const verification = await axios.get(
        `${PAYSTACK_BASE}/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET}`,
          },
        },
      );

      const transaction = verification.data.data;
      if (transaction.status === "success") {
        await markOrderAsPaid(reference);
      }
    }
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function verifyPayment(req, res) {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId).lean();
    if (!order)
      return res.status(400).json({
        success: false,
        message: "Order not found",
      });
    if (order.paymentStatus !== "paid")
      return res.status(400).json({
        success: false,
        message: "Order payment verification failed",
      });

    return res.status(200).json({
      orderId,
      success: true,
      paymentStatus: "paid",
      paid: order.paymentStatus === "paid",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
