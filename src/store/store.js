import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createUISlice } from "./uiSlice.js";
import { createAuthSlice } from "./AuthSlice.js";
import { createCartSlice } from "./CartSlice.js";

export const useStore = create(
  persist(
    immer((set, get) => ({
      ...createAuthSlice(set),
      ...createCartSlice(set, get),
      ...createUISlice(set),
    })),
    {
      name: "shop-store",
      partialize: (state) => ({
        cartItems: state.cartItems,
      }),
    },
  ),
);
