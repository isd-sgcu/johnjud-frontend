import { Link } from "react-router-dom";
import LoginForm from "../../components/Form/RegisterForm";
import SubmitButton from "../../components/Form/SubmitButton";
import MainLayout from "../../layouts/MainLayout";

// Page
const Login = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center justify-center space-y-4 px-3">
        <h1 className="text-nowrap text-5xl font-bold text-primary ">
          เข้าสู่ระบบ
        </h1>
        <p className="text-nowrap text-lg font-normal text-johnjud-gray">
          เข้าสู่ระบบของคุณ
        </p>
      </div>
      <LoginForm />
      <div className="flex flex-col items-center justify-center">
        <SubmitButton text="เข้าสู่ระบบ" />
        <div className="flex space-x-2 px-2.5 py-2">
          <span className="text-base-johnjud-gray">ยังไม่มีบัญชี?</span>
          <Link
            to="/register"
            className="text-base font-semibold text-black underline"
          >
            ลงทะเบียน
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Layout
export const Layout = MainLayout;
