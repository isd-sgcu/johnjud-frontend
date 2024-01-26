import { AuthState } from "@/types/auth";
import setState from "zustand"
import create from "zustand";

const useAuthStore = create<AuthState>((set: setState<AuthState>) => ({
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  sessionTime: null,

  setIsLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
  setAccessToken: (token: string) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
  setRefreshToken: (token: string) => set({ refreshToken: token }),
  clearRefreshToken: () => set({ refreshToken: null }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setError: (error: Error) => set({ error }),
  setSessionTime: (time: number) => set({ sessionTime: time }),
}));


export default useAuthStore;
