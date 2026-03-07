import { api } from "../lib/axios.js";

function getAPI() {
  let API;
  if (typeof window === "undefined") {
    API = process.env.API_URL || `http://localhost:8000`;
  } else {
    API = import.meta.env.VITE_API_URL || `http://localhost:8000`;
  }
  return API;
}

export async function fetchProducts(filters = {}, pageParam = null) {
  const params = new URLSearchParams();
  if (pageParam) params.set("cursor", pageParam);
  params.set("limit", "20");
  if (filters.category) params.set("category", filters.category);
  if (filters.minPrice) params.set("minPrice", filters.minPrice);
  if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
  if (filters.search) params.set("search", filters.search);

  const res = await fetch(`${getAPI()}/api/product/all?${params}`);
  if (!res.ok) throw new Error("Unable to fetch products");
  return res.json();
}

export async function fetchProductFilters() {
  const res = await fetch(`${getAPI()}/api/product/filters`);
  if (!res.ok) throw new Error("Unable to fetch product-filters");
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${getAPI()}/api/product/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export async function fetchProductsAdmin(pageParam = null, isActive) {
  const params = new URLSearchParams();
  if (pageParam) params.set("cursor", pageParam);
  params.set("limit", "10");
  if (isActive !== "undefined") params.set("isActive", isActive);

  const res = api.get(`${getAPI()}/api/product/admin/all?${params}`);
  return res.data;
}

export async function createProduct(formData) {
  const res = await api.post(`${getAPI()}/api/product/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

export async function updatedProduct(id, formData) {
  const res = await api.patch(
    `${getAPI()}/api/product/update/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data;
}

export async function deleteProduct(id) {
  const res = api.delete(`${getAPI()}/api/product/${id}`);
  return res.data;
}
