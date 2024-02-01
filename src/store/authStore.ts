import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
      setAuth: (accessToken : string, refreshToken : string) => {
        set({ accessToken, refreshToken, isLoggedIn: true });
        console.log('setAuth', accessToken, refreshToken);
      },
      clearAuth: () =>
        set({ accessToken: null, refreshToken: null, isLoggedIn: false }),
    }),
    {
      name: 'auth',
    }
  )
);

export default useAuthStore;