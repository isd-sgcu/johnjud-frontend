import type { SignOutResponse } from "@/api/auth/signOut";
import { useAuthStore } from "@/store/authStore";
import type { UseMutationOptions } from "@tanstack/react-query";

export const signOutMutationOption: UseMutationOptions<
  SignOutResponse,
  Error,
  void
> = {
  onSuccess: () => {
    const { clearStore } = useAuthStore();
    clearStore();

    // idea: maybe we can redirect to the login page here?
  },
  onError: (error: Error) => {
    const { setError } = useAuthStore();
    setError(error instanceof Error ? error : new Error("Log out failed!!!"));
  },
  onSettled: () => {
    const { setLoading } = useAuthStore();
    setLoading(false);
  },
};
