import axios from "axios";

interface SignUpResponse {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

interface SignUpCredentials {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}
const signUp = async (
  email: string,
  firstname: string,
  lastname: string,
  password: string
): Promise<SignUpResponse> => {
  const response = await axios.post<SignUpResponse>(
    `${import.meta.env.VITE_API_URL}/auth/signup`,
    { email, firstname, lastname, password }
  );

  return response.data;
};

export { signUp };
export type { SignUpCredentials, SignUpResponse };
