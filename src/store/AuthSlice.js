export const createAuthSlice = (set) => ({
  auth: {
    token: null,
    user: null,
  },
  setAuth: (token, user) =>
    set((state) => {
      state.auth.token = token;
      state.auth.user = user;
    }),
  clearAuth: () =>
    set((state) => {
      state.auth.token = null;
      state.auth.user = null;
    }),
});
