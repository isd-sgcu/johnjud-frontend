interface AuthState {
  // State properties
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: Error | null;
  sessionTime: number | null;

  // Action methods to update the state
  setIsLoggedIn: (loggedIn: boolean) => void;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
  setRefreshToken: (token: string) => void;
  clearRefreshToken: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error) => void;
  setSessionTime: (time: number) => void;
  signIn: (email: string, password: string) => Promise<void>;
}

export type { AuthState };