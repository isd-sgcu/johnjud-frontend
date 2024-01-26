import { useAuthStore } from "@/store/authStore";
import type { Auth } from "@/types/auth";
const isSessionValid = useAuthStore((state: Auth) => {
  const currentTime = Date.now();
  return state.sessionTime && currentTime < state.sessionTime;
});

export default isSessionValid;
