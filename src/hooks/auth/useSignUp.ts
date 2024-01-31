import { SignUpCredentials, SignUpResponse, signUp } from "@/api/auth/signUp";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

const useSignUp = () => {
  const mutationOptions: UseMutationOptions<
    SignUpResponse,
    Error,
    SignUpCredentials
  > = {
    mutationFn: (credentials: SignUpCredentials) =>
      signUp(
        credentials.email,
        credentials.password,
        credentials.email,
        credentials.lastname
      ),
    onSuccess: (data: SignUpResponse) => {
      console.log(`User ${data.email} successfully signed up.`);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<SignUpResponse, Error, SignUpCredentials>(
    mutationOptions
  );

  return mutation;
};

export default useSignUp;
