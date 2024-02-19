import useAuthStore from "@/store/authStore";
import axios from "axios";

interface SignOutResponse {
  is_success: boolean;
}

const signOut = async (): Promise<SignOutResponse> => {
  // Access the accessToken directly from the Zustand store
  const { accessToken } = useAuthStore.getState();

  const response = await axios.post<SignOutResponse>(
    `${import.meta.env.VITE_API_URL}/auth/signout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export { signOut };
export type { SignOutResponse };
