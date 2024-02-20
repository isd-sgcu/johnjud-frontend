import LoginForm from "@/components/Form/LoginForm";
import useSignIn from "@/hooks/auth/useSignIn";
import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Page
const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const { mutate } = useSignIn();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/pets");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center justify-center space-y-4 px-3">
        <h1 className="text-nowrap text-5xl font-bold text-accent-red">
          เข้าสู่ระบบ
        </h1>
        <p className="text-johnjud-gray text-nowrap text-lg font-normal">
          เข้าสู่ระบบของคุณ
        </p>
      </div>
      <LoginForm mutation={mutate} />
    </div>
  );
};

export default Login;

// Layout
export const Layout = MainLayout;
