import MainLayout from "../../../../johnjud-frontend-2/src/layouts/MainLayout";
import RegisterForm from "../../components/Form/RegisterForm";
import SubmitButton from "../../components/Form/SubmitButton";
import { Link } from "react-router-dom";

// Page
const Register = () => {
  return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
        <div className="flex flex-col items-center justify-center px-3 space-y-1">
            <h1 className="text-5xl text-nowrap text-primary font-bold ">ลงทะเบียน</h1>
            <p className="text-lg text-nowrap text-johnjud-gray font-normal">ลงทะเบียนบัญชีของคุณ</p>
        </div>
        <RegisterForm />
        <div className="flex flex-col justify-center items-center">
          <SubmitButton text="ลงทะเบียน" />
          <div className="flex py-2 px-2.5 space-x-2">
            <span className="text-base-johnjud-gray">มีบัญชีอยู่แล้ว?</span>
            <Link to="/login" className="text-black text-base font-semibold underline">คลิกเพื่อเข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
  );
};

export default Register;

// Layout
export const Layout = MainLayout;
