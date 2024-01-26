import axios from "axios";

interface forgetPasswordResponse {
  is_success: boolean;
}

const forgetPassword = async (
  email: string
): Promise<forgetPasswordResponse> => {
  const response = await axios.post<forgetPasswordResponse>(
    `${import.meta.env.VITE_API_URL}/auth/password/forgotPassword`,
    { email }
  );

  return response.data;
};

export { forgetPassword };
export type { forgetPasswordResponse };
