import {
  forgetPassword,
  ForgetPasswordCredentials,
  ForgetPasswordResponse,
} from "@/api/auth/password/forgotPassword";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useForgetPassword = () => {
  const mutationOptions: UseMutationOptions<
    ForgetPasswordResponse,
    Error,
    ForgetPasswordCredentials
  > = {
    mutationFn: (credentials: ForgetPasswordCredentials) =>
      forgetPassword(credentials.email),
    onSuccess: () => {
      console.log("forget password successful");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<
    ForgetPasswordResponse,
    Error,
    ForgetPasswordCredentials
  >(mutationOptions);

  return mutation;
};

export default useForgetPassword;
