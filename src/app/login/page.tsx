import MainLayout from "../../../../johnjud-frontend-2/src/layouts/MainLayout";
import LoginForm from "../../components/Form/LoginForm";
import SubmitButton from "../../components/Form/SubmitButton";
import { Link } from "react-router-dom";

// Page
const Login = () => {
  return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
        <div className="flex flex-col items-center justify-center px-3 space-y-4">
            <h1 className="text-5xl text-nowrap text-primary font-bold ">เข้าสู่ระบบ</h1>
            <p className="text-lg text-nowrap text-johnjud-gray font-normal">เข้าสู่ระบบของคุณ</p>
        </div>
        <LoginForm />
        <div className="flex flex-col justify-center items-center">
          <SubmitButton text="เข้าสู่ระบบ" />
          <div className="flex py-2 px-2.5 space-x-2">
            <span className="text-base-johnjud-gray">ยังไม่มีบัญชี?</span>
            <Link to="/register" className="text-black text-base font-semibold underline">ลงทะเบียน</Link>
          </div>
        </div>
      </div>
  );
};

export default Login;

// Layout
export const Layout = MainLayout;
