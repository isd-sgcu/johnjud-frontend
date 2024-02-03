import useAuthStore from "@/store/authStore";
import axios from "axios";

interface RefreshTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

interface RefreshTokenCredentials {
  refresh_token: string;
}

const refreshToken = async (
  refresh_token: string
): Promise<RefreshTokenResponse> => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.post<RefreshTokenResponse>(
    `${import.meta.env.VITE_API_URL}/auth/refreshToken`,
    {
      refresh_token,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export { refreshToken };
export type { RefreshTokenCredentials, RefreshTokenResponse };
