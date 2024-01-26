import type { resetPasswordCredentials, resetPasswordResponse } from "@/api/auth/password/resetPassword";
import { useAuthStore } from "@/store/authStore";
import type { UseMutationOptions } from "@tanstack/react-query";

export const resetPasswordMutationOption: UseMutationOptions<resetPasswordResponse, Error, resetPasswordCredentials> = {
    onSuccess: (response: resetPasswordResponse) => {
        
        console.log('Reset password successful:', response)
    },
    onError: (error: Error) => {
        const { setError } = useAuthStore();
        setError(error instanceof Error ? error : new Error("Reset password failed"));
    },
    onSettled: () => {
        const { setLoading } = useAuthStore();
        setLoading(false);
    },


}

