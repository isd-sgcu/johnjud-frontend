import { Link } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm";
import SubmitButton from "../../components/Form/SubmitButton";
import MainLayout from "../../layouts/MainLayout";

// Page
const Register = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center justify-center space-y-1 px-3">
        <h1 className="text-nowrap text-5xl font-bold text-primary ">
          ลงทะเบียน
        </h1>
        <p className="text-nowrap text-lg font-normal text-johnjud-gray">
          ลงทะเบียนบัญชีของคุณ
        </p>
      </div>
      <RegisterForm />
      <div className="flex flex-col items-center justify-center">
        <SubmitButton text="ลงทะเบียน" />
        <div className="flex space-x-2 px-2.5 py-2">
          <span className="text-base-johnjud-gray">มีบัญชีอยู่แล้ว?</span>
          <Link
            to="/login"
            className="text-base font-semibold text-black underline"
          >
            คลิกเพื่อเข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

// Layout
export const Layout = MainLayout;
