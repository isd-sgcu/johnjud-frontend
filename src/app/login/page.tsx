import LoginForm from "@/components/Form/LoginForm";
import useSignIn from "@/hooks/auth/useSignIn";
import MainLayout from "@/layouts/MainLayout";
import { useState, useEffect } from "react";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";

// Page
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn.mutate({ email, password });
  };
  console.log("isLoggedIn", isLoggedIn)
  // if the user logged in and we in /login redirect to /home
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center justify-center space-y-4 px-3">
        <h1 className="text-nowrap text-5xl font-bold text-primary ">
          เข้าสู่ระบบ
        </h1>
        <p className="text-johnjud-gray text-nowrap text-lg font-normal">
          เข้าสู่ระบบของคุณ
        </p>
      </div>
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;

// Layout
export const Layout = MainLayout;
