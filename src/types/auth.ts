type AuthState = {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  loading: boolean;
  error?: Error;
  sessionTime: number;
};

type AuthAction = {
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error) => void;
  setSessionTime: (sessionTime: number) => void;
  clearStore: () => void;
};

export type Auth = AuthState & AuthAction;
