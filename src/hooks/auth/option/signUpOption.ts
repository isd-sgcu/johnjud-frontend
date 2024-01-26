import type { SignUpCredentials, SignUpResponse } from "@/api/auth/signUp";
import { useAuthStore } from "@/store/authStore";
import type { UseMutationOptions } from "@tanstack/react-query";

export const signUpMutationOption: UseMutationOptions<
  SignUpResponse,
  Error,
  SignUpCredentials
> = {
  onSuccess: (response: SignUpResponse) => {
    console.log("Sign up successful:", response);
  },
  onError: (error: Error) => {
    const { setError } = useAuthStore();
    setError(error instanceof Error ? error : new Error("Sign up failed"));
  },
  onSettled: () => {
    const { setLoading } = useAuthStore();
    setLoading(false);
  },
};
