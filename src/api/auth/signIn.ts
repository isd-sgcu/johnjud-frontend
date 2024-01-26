import axios from "axios";

interface SignInResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}
const signIn = async (
  email: string,
  password: string
): Promise<SignInResponse> => {
  const response = await axios.post<SignInResponse>(
    `${import.meta.env.VITE_API_URL}/auth/signin`,
    { email, password }
  );

  return response.data;
};

export { signIn };
export type { SignInResponse, SignInCredentials };
