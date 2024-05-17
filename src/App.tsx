import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { StrictMode, Suspense, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { refreshToken as getRefreshToken } from "./api/auth/refreshToken";
import { router } from "./routes";
import useAuthStore from "./store/authStore";
import { calculateExpiryTime } from "./utils/calculateExpiryTime";

function AppRoot() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col items-center justify-center">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [isRefreshingToken, setIsRefreshingToken] = useState(false);

  const refreshAuthToken = async (
    accessToken: string,
    refreshToken: string
  ) => {
    if (isRefreshingToken) return;
    if (accessToken == null || refreshToken == null) return;

    try {
      const response = await getRefreshToken(refreshToken);

      const expriedAt = calculateExpiryTime(response.expires_in);
      setAuth(response.access_token, response.refresh_token, expriedAt);
    } catch (error) {
      clearAuth();
      router.navigate("/admin");
    } finally {
      setIsRefreshingToken(false);
    }
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30000, // 30 seconds
            retry: (failureCount, error) => {
              // Don't retry for certain error responses
              if (
                error.message.includes("400") ||
                error.message.includes("401")
              ) {
                return false;
              }

              // Retry others just once
              return failureCount <= 1;
            },
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            if (
              error.message.includes("400") ||
              error.message.includes("401")
            ) {
              if (accessToken == null || refreshToken == null) return;
              refreshAuthToken(accessToken, refreshToken);
            }
          },
        }),
      })
  );

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRoot />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
