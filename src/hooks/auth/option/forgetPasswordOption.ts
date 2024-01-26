import type {
  ForgetPasswordCredentials,
  ForgetPasswordResponse,
} from "@/api/auth/password/forgotPassword";
import { useAuthStore } from "@/store/authStore";
import type { UseMutationOptions } from "@tanstack/react-query";

export const forgetPasswordMutationOption: UseMutationOptions<
  ForgetPasswordResponse,
  Error,
  ForgetPasswordCredentials
> = {
  onSuccess: (response: ForgetPasswordResponse) => {
    // implement what to do when the user forgets password here I have no idea
    console.log("Forget password successful:", response);
  },
  onError: (error: Error) => {
    const { setError } = useAuthStore();
    setError(
      error instanceof Error ? error : new Error("Forget password failed")
    );
  },
  onSettled: () => {
    const { setLoading } = useAuthStore();
    setLoading(false);
  },
};
