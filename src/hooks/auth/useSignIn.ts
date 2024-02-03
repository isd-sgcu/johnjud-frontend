import { signIn, SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import useAuthStore from "@/store/authStore";
import { calculateExpiryTime } from "@/utils/calculateExpiryTime";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
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
      const expriedAt = calculateExpiryTime(data.expires_in);
      setAuth(data.access_token, data.refresh_token, expriedAt);
      navigate("/admin/pets");
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
