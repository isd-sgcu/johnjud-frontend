interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  setAuth: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
}

export type { AuthState };
