import {
  refreshToken,
  RefreshTokenCredentials,
  RefreshTokenResponse,
} from "@/api/auth/refreshToken";
import useAuthStore from "@/store/authStore";
import { calculateExpiryTime } from "@/utils/calculateExpiryTime";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useRefreshToken = () => {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();

  const mutationOptions: UseMutationOptions<
    RefreshTokenResponse,
    Error,
    RefreshTokenCredentials
  > = {
    mutationFn: (credentials: RefreshTokenCredentials) =>
      refreshToken(credentials.refresh_token),
    onSuccess: (data: RefreshTokenResponse) => {
      const expriedAt = calculateExpiryTime(data.expires_in);
      useAuthStore
        .getState()
        .setAuth(data.access_token, data.refresh_token, expriedAt);
    },
    onError: () => {
      clearAuth();
      navigate("/admin");
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
