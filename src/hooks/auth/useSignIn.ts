import { signIn, SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import useAuthStore from "@/store/authStore";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';

const useSignIn = () => {
  const { setAuth } = useAuthStore();
    const navigate = useNavigate();
  const mutationOptions: UseMutationOptions<
    SignInResponse,
    Error,
    SignInCredentials
  > = {
    mutationFn: (credentials: SignInCredentials) =>
      signIn(credentials.email, credentials.password),
    onSuccess: (data: SignInResponse) => {
      setAuth(data.access_token, data.refresh_token);
        navigate('/admin/pets');
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
