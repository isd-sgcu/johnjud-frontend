import {
  resetPassword,
  ResetPasswordCredentials,
  ResetPasswordResponse,
} from "@/api/auth/password/resetPassword";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useResetPassword = () => {
  const mutationOptions: UseMutationOptions<
    ResetPasswordResponse,
    Error,
    ResetPasswordCredentials
  > = {
    mutationFn: (credentials: ResetPasswordCredentials) =>
      resetPassword(credentials.password, credentials.token),
    onSuccess: () => {
      console.log("reset password successful");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<
    ResetPasswordResponse,
    Error,
    ResetPasswordCredentials
  >(mutationOptions);

  return mutation;
};

export default useResetPassword;
