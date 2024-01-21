import LoginForm from "@/components/Form/LoginForm";
import MainLayout from "@/layouts/MainLayout";

// Page
const Login = () => {
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
      <LoginForm />
    </div>
  );
};

export default Login;

// Layout
export const Layout = MainLayout;
