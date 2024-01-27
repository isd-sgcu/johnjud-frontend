import LoginForm from "@/components/Form/LoginForm";
import { useAuth } from "@/hooks/auth/useAuth";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

// Page
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn.mutate({ email, password });
  };

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
