import { Auth } from "@/types/auth";
import { create } from "zustand";
const useAuthStore = create<Auth>((set) => ({
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  setAuth: (accessToken, refreshToken) =>
    set({ accessToken, refreshToken, isLoggedIn: true }),
  clearAuth: () =>
    set({ accessToken: null, refreshToken: null, isLoggedIn: false }),
}));

export default useAuthStore;
