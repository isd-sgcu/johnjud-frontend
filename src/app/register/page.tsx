import RegisterForm from "@/components/Form/RegisterForm";
import MainLayout from "@/layouts/MainLayout";

// Page
const Register = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-12 p-12">
      <div className="flex flex-col items-center justify-center space-y-1 px-3">
        <h1 className="text-nowrap text-5xl font-bold text-primary ">
          ลงทะเบียน
        </h1>
        <p className="text-johnjud-gray text-nowrap text-lg font-normal">
          ลงทะเบียนบัญชีของคุณ
        </p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;

// Layout
export const Layout = MainLayout;
