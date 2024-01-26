import { Auth } from "@/types/auth";
import { create } from "zustand";

const useAuthStore = create<Auth>((set) => ({
  // state
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  loading: false,
  error: undefined,
  sessionTime: 0,

  // action ( mostly setters )
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: Error | undefined) => set({ error }),
  setSessionTime: (sessionTime: number) => set({ sessionTime }),

  // for logout
  clearStore: () =>
    set({
      accessToken: "",
      refreshToken: "",
      isLoggedIn: false,
      loading: false,
      error: undefined,
      sessionTime: 0,
    }),
}));

export { useAuthStore };
