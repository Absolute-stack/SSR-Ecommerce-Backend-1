import { api } from "../lib/axios.js";

export async function initializePayment(orderId) {
  const res = await api.post(`/api/paystack/initialize`, { orderId });
  return res.data;
}

export async function verifyPayment(orderId) {
  const res = await api.get("/api/paystack/verify", { orderId });
  return res.data;
}
