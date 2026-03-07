export const createCartSlice = (set, get) => ({
  cartItems: [],
  addItem: (item, selectedSize) =>
    set((state) => {
      const exists = state.cartItems.find(
        (i) => i._id === item._id && i.selectedSize === selectedSize,
      );
      if (exists) {
        exists.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          selectedSize,
          quantity: 1,
        });
      }
    }),
  removeItem: (id, selectedSize) =>
    set((state) => {
      state.cartItems.filter(
        !((i) => i._id === id && i.selectedSize === selectedSize),
      );
    }),
  clearCart: () =>
    set((state) => {
      state.cartItems = [];
    }),
  incQty: (id, selectedSize) =>
    set((state) => {
      const item = state.cartItems.find(
        (i) => i._id === id && i.selectedSize === selectedSize,
      );
      if (item) item.quantity += 1;
    }),
  decQty: (id, selectedSize) =>
    set((state) => {
      const item = state.cartItems.find(
        (i) => i._id === id && i.selectedSize === selectedSize,
      );
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItems.filter(
            (i) => !(i._id === id && i.selectedSize === selectedSize),
          );
        }
      }
    }),
  getTotalItems: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    const { cartItems } = get();
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },
});
