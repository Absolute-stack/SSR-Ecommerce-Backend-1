export const createUISlice = (set) => ({
  ui: {
    isCartOpen: false,
    isMobileMenuOpen: false,
  },
  toggleCart: () =>
    set((state) => {
      state.ui.isCartOpen = !state.ui.isCartOpen;
    }),
  closeCart: () =>
    set((state) => {
      state.ui.isCartOpen = false;
    }),
  toggleMobileMenu: () =>
    set((state) => {
      state.ui.isMobileMenuOpen = !state.ui.isMobileMenuOpen;
    }),
  closeMobileMenu: () =>
    set((state) => {
      state.ui.isMobileMenuOpen = false;
    }),
});
