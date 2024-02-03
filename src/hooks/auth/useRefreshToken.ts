import {
  refreshToken,
  RefreshTokenCredentials,
  RefreshTokenResponse,
} from "@/api/auth/refreshToken";
import useAuthStore from "@/store/authStore";
import { calculateExpiryTime } from "@/utils/calculateExpiryTime";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useRefreshToken = () => {

  
  const mutationOptions: UseMutationOptions<
    RefreshTokenResponse,
    Error,
    RefreshTokenCredentials
  > = {
    mutationFn: (credentials: RefreshTokenCredentials) =>
      refreshToken(credentials.refresh_token),
    onSuccess: (data: RefreshTokenResponse) => {
      console.log(data);
      const expriedAt = calculateExpiryTime(data.expires_in);
      useAuthStore.getState().setAuth(data.access_token, data.refresh_token, expriedAt);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  };

  const mutation = useMutation<
    RefreshTokenResponse,
    Error,
    RefreshTokenCredentials
  >(mutationOptions);

  return mutation;
};

export default useRefreshToken;
