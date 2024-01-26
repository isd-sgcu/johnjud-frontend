// hooks/useAuth.ts
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/authStore';
import { signIn as signInApi } from '@/api/auth/signIn';
import type { SignInCredentials, SignInResponse } from '@/api/auth/signIn';

const useAuth = () => {
  const { setAccessToken, setRefreshToken, setSessionTime, setLoading, setError } = useAuthStore();

  // Define the signIn mutation
  const signIn = useMutation<SignInResponse, Error, SignInCredentials>(
    async ({ email, password }: SignInCredentials) => {
      try {
        setLoading(true); // Optionally manage loading state
        const response = await signInApi(email, password);
        setAccessToken(response.access_token);
        setRefreshToken(response.refresh_token);
        const expirationTimestamp = Date.now() + response.expires_in * 1000;
        setSessionTime(expirationTimestamp);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Sign in failed'));
        throw error; // Ensures error is captured by React Query
      } finally {
        setLoading(false); 
      }
    }
  );

  
  return { signIn };
};

export default useAuth;
