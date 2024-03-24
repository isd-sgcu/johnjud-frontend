import {
  resetPassword,
  ResetPasswordCredentials,
  ResetPasswordResponse,
} from "@/api/auth/password/resetPassword";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useResetPassword = () => {
  const mutationOptions: UseMutationOptions<
    ResetPasswordResponse,
    Error,
    ResetPasswordCredentials
  > = {
    mutationFn: (credentials: ResetPasswordCredentials) =>
      resetPassword(credentials.password, credentials.token),
    onSuccess: () => {
      toast.success("Reset Password Successfully");
    },
    onError: () => {
      toast.error("มีบางอย่างผิดพลาด");
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
