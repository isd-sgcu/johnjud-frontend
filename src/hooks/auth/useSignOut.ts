import { signOut, SignOutResponse } from "@/api/auth/signOut";
import useAuthStore from "@/store/authStore";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();

  const mutationOptions: UseMutationOptions<SignOutResponse, Error, void> = {
    mutationFn: () => signOut(),
    onSuccess: () => {
      clearAuth();
      navigate("/admin");
    },
    onError: (error: Error) => {
      console.log(error);
      clearAuth();
      navigate("/admin");
    },
  };

  const mutation = useMutation<SignOutResponse, Error, void>(mutationOptions);

  return mutation;
};

export default useSignOut;
