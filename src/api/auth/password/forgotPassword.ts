import axios from "axios";

interface ForgetPasswordResponse {
  is_success: boolean;
}

interface ForgetPasswordCredentials {
  email: string;
}

const forgetPassword = async (
  email: string
): Promise<ForgetPasswordResponse> => {
  const response = await axios.post<ForgetPasswordResponse>(
    `${import.meta.env.VITE_API_URL}/auth/forgot-password`,
    { email }
  );

  return response.data;
};

export { forgetPassword };
export type { ForgetPasswordCredentials, ForgetPasswordResponse };
