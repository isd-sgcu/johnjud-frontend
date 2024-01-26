import type { SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import type { SignUpResponse, SignUpCredentials } from "@/api/auth/signUp";
import { signIn as signInApi } from "@/api/auth/signIn";
import { signUp as signUpApi } from "@/api/auth/signUp";
import { SignOutResponse, signOut as signOutApi } from "@/api/auth/signOut";
import { signInMutationOption } from "@/hooks/auth/option/signInOption";
import { signUpMutationOption } from "@/hooks/auth/option/signUpOption";
import { signOutMutationOption } from "@/hooks/auth/option/signOutOption";
import { useMutation } from "@tanstack/react-query";

const useAuth = () => {

  const signIn = useMutation<SignInResponse, Error, SignInCredentials>({
    mutationFn: ({ email, password }: SignInCredentials) =>
      signInApi(email, password),
    ...signInMutationOption,
  });

  const signUp = useMutation<SignUpResponse, Error, SignUpCredentials>({
    mutationFn: ({email, firstname, lastname, password} : SignUpCredentials) => 
        signUpApi(email, firstname, lastname, password),
    ...signUpMutationOption,
  });

  const signOut = useMutation<SignOutResponse, Error, void>({
    mutationFn: () => signOutApi(),
    ...signOutMutationOption,
  });

  return { signIn, signUp, signOut };
};

export { useAuth };
