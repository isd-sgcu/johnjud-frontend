import type { SignInCredentials, SignInResponse } from "@/api/auth/signIn";
import { signIn as signInApi } from "@/api/auth/signIn";
import { signInMutationOption } from "@/hooks/auth/option/signInOption";
import { useMutation } from "@tanstack/react-query";

const useAuth = () => {
  const signIn = useMutation<SignInResponse, Error, SignInCredentials>({
    mutationFn: ({ email, password }: SignInCredentials) =>
      signInApi(email, password),
    ...signInMutationOption,
  });

  return { signIn };
};

export { useAuth };
