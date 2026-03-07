import { useShallow } from "zustand/shallow";
import { useStore } from "../store/store.js";

export function useCart() {
  return useStore(
    useShallow((state) => ({
      cartItems: state.cartItems,
      addItem: state.addItem,
      removeItem: state.removeItem,
      incQty: state.incQty,
      decQty: state.decQty,
      clearCart: state.clearCart,
      getTotalItems: state.getTotalItems,
      getTotalPrice: state.getTotalPrice,
    })),
  );
}
