import { signOut, SignOutResponse } from "@/api/auth/signOut";
import useAuthStore from "@/store/authStore";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useSignOut = () => {
  const { clearAuth } = useAuthStore();

  const mutationOptions: UseMutationOptions<SignOutResponse, Error, void> = {
    mutationFn: () => signOut(),
    onSuccess: () => {
      clearAuth();
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<SignOutResponse, Error, void>(mutationOptions);

  return mutation;
};

export default useSignOut;
