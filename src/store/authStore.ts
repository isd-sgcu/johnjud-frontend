import { AuthState } from "@/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
      expriedAt: null,
      setAuth: (accessToken: string, refreshToken: string, expriedAt: Date) => {
        set({ accessToken, refreshToken, expriedAt, isLoggedIn: true });
      },
      clearAuth: () => {
        set({ accessToken: null, refreshToken: null, isLoggedIn: false });
      },
      validateSession: () => {
        // compare the current date with the expiry date
        const { expriedAt } = get();
        if (expriedAt && new Date() < expriedAt) {
          return true;
        }
        return false;
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
