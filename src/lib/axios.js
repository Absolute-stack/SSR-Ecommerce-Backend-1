import axios from "axios";
import { getQueryClient } from "./queryClient.js";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Create axios instance with base URL
export const api = axios.create({
  baseURL: API,
  withCredentials: true, // send cookies automatically with every request
});

// Flag to prevent multiple simultaneous refresh attempts
let isRefreshing = false;
let failedQueue = [];

function processQueue(error, token = null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
}

// Request interceptor — attach token to every request
api.interceptors.request.use(
  (config) => {
    // Get token directly from store without useStore hook
    // (interceptors run outside React components)
    const state = JSON.parse(localStorage.getItem("shop-store") || "{}");

    // Token is in memory not localStorage — get from window
    const token = window.__AUTH_TOKEN__;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor — handle expired tokens silently
api.interceptors.response.use(
  (response) => response, // pass through successful responses

  async (error) => {
    const originalRequest = error.config;

    // If 401 and token expired and haven't already retried
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "Token expired" &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        // Another refresh is already in progress
        // Queue this request to retry after refresh completes
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call refresh endpoint — browser sends httpOnly cookie automatically
        const response = await axios.get(`${API}/api/auth/refresh`, {
          withCredentials: true,
        });

        const newToken = response.data.accessToken;

        // Store new token in memory
        window.__AUTH_TOKEN__ = newToken;

        // Update Zustand store
        const { useStore } = await import("../store/store.js");
        const state = useStore.getState();
        if (state.auth.user) {
          state.setAuth(newToken, state.auth.user);
        }

        // Process queued requests with new token
        processQueue(null, newToken);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed — user needs to log in again
        processQueue(refreshError, null);

        // Clear auth state
        window.__AUTH_TOKEN__ = null;
        const { useStore } = await import("../store/store.js");
        useStore.getState().clearAuth();

        // Invalidate all queries
        getQueryClient().clear();

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

// Helper to set token when user logs in
export function setAuthToken(token) {
  window.__AUTH_TOKEN__ = token;
}

// Helper to clear token when user logs out
export function clearAuthToken() {
  window.__AUTH_TOKEN__ = null;
}
