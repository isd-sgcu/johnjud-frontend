interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  expriedAt: Date | null;
  setAuth: (accessToken: string, refreshToken: string, expriedAt: Date) => void;
  clearAuth: () => void;
  validateSession: () => boolean;
}

export type { AuthState };
