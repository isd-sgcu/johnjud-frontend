import type {
  ForgetPasswordCredentials,
  ForgetPasswordResponse,
} from "@/api/auth/password/forgotPassword";
import { forgetPassword as forgetPasswordApi } from "@/api/auth/password/forgotPassword";
import type {
  resetPasswordCredentials,
  resetPasswordResponse,
} from "@/api/auth/password/resetPassword";
import { resetPassword as resetPasswordApi } from "@/api/auth/password/resetPassword";
import type { SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import { signIn as signInApi } from "@/api/auth/signIn";
import { SignOutResponse, signOut as signOutApi } from "@/api/auth/signOut";
import type { SignUpCredentials, SignUpResponse } from "@/api/auth/signUp";
import { signUp as signUpApi } from "@/api/auth/signUp";
import { forgetPasswordMutationOption } from "@/hooks/auth/option/forgetPasswordOption";
import { resetPasswordMutationOption } from "@/hooks/auth/option/resetPasswordOption";
import { signInMutationOption } from "@/hooks/auth/option/signInOption";
import { signOutMutationOption } from "@/hooks/auth/option/signOutOption";
import { signUpMutationOption } from "@/hooks/auth/option/signUpOption";
import { useMutation } from "@tanstack/react-query";

const useAuth = () => {
  const signIn = useMutation<SignInResponse, Error, SignInCredentials>({
    mutationFn: ({ email, password }: SignInCredentials) =>
      signInApi(email, password),
    ...signInMutationOption,
  });

  const signUp = useMutation<SignUpResponse, Error, SignUpCredentials>({
    mutationFn: ({ email, firstname, lastname, password }: SignUpCredentials) =>
      signUpApi(email, firstname, lastname, password),
    ...signUpMutationOption,
  });

  const signOut = useMutation<SignOutResponse, Error, void>({
    mutationFn: () => signOutApi(),
    ...signOutMutationOption,
  });

  const forgetPassword = useMutation<
    ForgetPasswordResponse,
    Error,
    ForgetPasswordCredentials
  >({
    mutationFn: ({ email }: ForgetPasswordCredentials) =>
      forgetPasswordApi(email),
    ...forgetPasswordMutationOption,
  });

  const resetPassword = useMutation<
    resetPasswordResponse,
    Error,
    resetPasswordCredentials
  >({
    mutationFn: ({ token, password }: resetPasswordCredentials) =>
      resetPasswordApi(token, password),
    ...resetPasswordMutationOption,
  });

  return { signIn, signUp, signOut, forgetPassword, resetPassword };
};

export { useAuth };
