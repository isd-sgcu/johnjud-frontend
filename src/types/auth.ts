interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean | null;
  expriedAt: Date | null;
  setAuth: (accessToken: string, refreshToken: string, expriedAt: Date) => void;
  clearAuth: () => void;
  validateSession: () => boolean;
}

export type { AuthState };
