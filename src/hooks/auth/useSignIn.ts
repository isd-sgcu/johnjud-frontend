import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signIn, SignInResponse } from "@/api/auth/signIn";
import useAuthStore from "@/store/authStore";

interface SignInCredentials {
    email: string;
    password: string;
}

const useSignIn = () => {
  const setAccessToken = useAuthStore((state : any) => state.setAccessToken);

  const mutationOptions: UseMutationOptions<SignInResponse, unknown, SignInCredentials> = {
    mutationFn: ({ email, password }) => signIn(email, password),
    onSuccess: (data) => {
      setAccessToken(data.access_token);
    },
  };

  return useMutation(mutationOptions);
};

export { useSignIn }