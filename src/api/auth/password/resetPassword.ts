import axios from "axios";

interface resetPasswordResponse {
  is_success: boolean;
}

const resetPassword = async (
  password: string,
  token: string
): Promise<resetPasswordResponse> => {
  const response = await axios.post<resetPasswordResponse>(
    `${import.meta.env.VITE_API_URL}/auth/password/resetPassword`,
    { password, token }
  );

  return response.data;
};

export { resetPassword };
export type { resetPasswordResponse };
