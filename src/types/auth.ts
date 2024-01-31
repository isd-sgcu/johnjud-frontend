interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
}

interface AuthAction {
  setAuth: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
}

export type Auth = AuthState & AuthAction;
