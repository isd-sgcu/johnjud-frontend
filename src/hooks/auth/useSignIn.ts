import { signIn, SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import useAuthStore from "@/store/authStore";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useSignIn = () => {
  const { setAuth } = useAuthStore();

  const mutationOptions: UseMutationOptions<
    SignInResponse,
    Error,
    SignInCredentials
  > = {
    mutationFn: (credentials: SignInCredentials) =>
      signIn(credentials.email, credentials.password),
    onSuccess: (data: SignInResponse) => {
      setAuth(data.access_token, data.refresh_token);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<SignInResponse, Error, SignInCredentials>(
    mutationOptions
  );

  return mutation;
};

export default useSignIn;
