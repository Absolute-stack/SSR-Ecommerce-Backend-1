import { api } from "../lib/axios.js";

export async function fetchAllOrders(filters = {}, pageParam = null) {
  const params = new URLSearchParams();
  if (pageParam) params.set("cursor", pageParam);
  if (filters.deliveryStatus)
    params.set("deliveryStatus", filters.deliveryStatus);
  if (filters.paymentStatus) params.set("paymentStatus", filters);

  const res = await api.get(`/api/order/all?${params}`);
  return res.data;
}

export async function createOrder(data) {
  const res = await api.post(`/api/order/create`, data);
  return res.data;
}

export async function fetchMyOrders(pageParam = null) {
  const params = new URLSearchParams();
  if (pageParam) params.set("cursor", pageParam);
  params.set("limit", "5");

  const res = await api.get(`/api/order/me?${params}`);
  return res.data;
}

export async function fetchOrderById(id) {
  const res = await api.get(`/api/order/${id}`);
  return res.data;
}

export async function guestOrderLookup(email, reference) {
  const res = await api.get("/api/order/guest-lookup", {
    params: { email, reference },
  });
  return res.data;
}

export async function updateOrderStatus(id, deliveryStatus) {
  const res = api.patch(`/api/order/update/${id}`, { deliveryStatus });
  return res.data;
}

export async function deleteOrder(id) {
  const res = await api.get(`/api/order/delete/${id}`);
  return res.data;
}
