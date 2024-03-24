import axios from "axios";

interface ResetPasswordResponse {
  is_success: boolean;
}

interface ResetPasswordCredentials {
  password: string;
  token: string;
}

const resetPassword = async (
  password: string,
  token: string
): Promise<ResetPasswordResponse> => {
  const response = await axios.put<ResetPasswordResponse>(
    `${import.meta.env.VITE_API_URL}/auth/reset-password`,
    { password, token }
  );

  return response.data;
};

export { resetPassword };
export type { ResetPasswordCredentials, ResetPasswordResponse };
