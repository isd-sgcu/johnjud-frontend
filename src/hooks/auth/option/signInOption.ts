import type { SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import { useAuthStore } from "@/store/authStore";
import type { UseMutationOptions } from "@tanstack/react-query";

export const signInMutationOption: UseMutationOptions<
  SignInResponse,
  Error,
  SignInCredentials
> = {
  onSuccess: (response: SignInResponse) => {
    const {
      setAccessToken,
      setRefreshToken,
      setIsLoggedIn,
      setLoading,
      setSessionTime,
    } = useAuthStore();
    setAccessToken(response.access_token);
    setRefreshToken(response.refresh_token);
    setIsLoggedIn(true);
    const expirationTimeStamp =
      new Date().getTime() + response.expires_in * 1000;
    setSessionTime(expirationTimeStamp);
    setLoading(false);
  },
  onError: (error: Error) => {
    const { setError, setLoading } = useAuthStore();
    setError(error instanceof Error ? error : new Error("Sign in failed!!!!!"));
    setLoading(false);
  },
  onSettled: () => {
    const { setLoading } = useAuthStore();
    setLoading(false);
  },
};
