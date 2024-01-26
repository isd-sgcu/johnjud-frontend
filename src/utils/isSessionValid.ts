import useAuthStore from "@/store/authStore";
import { AuthState } from "@/types/auth";

const isSessionValid = useAuthStore((state : AuthState) => {
  const currentTime = Date.now();
  return state.sessionTime && currentTime < state.sessionTime;
});

export default isSessionValid;
