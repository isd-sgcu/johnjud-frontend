import lockIcon from "@/assets/formIcon/lock.svg";
import userIcon from "@/assets/formIcon/user.svg";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";

const RegisterForm = () => {
  return (
    <form className="flex w-full flex-col items-center justify-center space-y-12 sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12">
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <div className="bg-accent-light-gray flex w-full items-center rounded-lg px-2.5 py-2.5 outline-none">
          <img src={userIcon} alt="Icon" className="mx-2" />
          <input
            type="text"
            placeholder="ชื่อ"
            className="bg-accent-light-gray text-accent-gray w-full rounded-lg font-semibold outline-none"
          />
        </div>
        <div className="bg-accent-light-gray flex w-full items-center rounded-lg px-2.5 py-2.5 outline-none">
          <img src={userIcon} alt="Icon" className="mx-2" />
          <input
            type="text"
            placeholder="นามสกุล"
            className="bg-accent-light-gray text-accent-gray w-full rounded-lg font-semibold outline-none"
          />
        </div>
        <div className="bg-accent-light-gray flex w-full items-center rounded-lg px-2.5 py-2.5 outline-none">
          <img src={userIcon} alt="Icon" className="mx-2" />
          <input
            type="email"
            placeholder="อีเมล"
            className="bg-accent-light-gray text-accent-gray w-full rounded-lg font-semibold outline-none"
          />
        </div>
        <div className="bg-accent-light-gray flex w-full items-center rounded-lg px-2.5 py-2.5 outline-none">
          <img src={lockIcon} alt="Icon" className="mx-2" />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="bg-accent-light-gray text-accent-gray w-full rounded-lg font-semibold outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SubmitButton text="ลงทะเบียน" />
        <div className="flex space-x-2 px-2.5 py-2">
          <span className="text-accent-gray text-base">มีบัญชีอยู่แล้ว?</span>
          <Link
            to="/login"
            className="text-base font-semibold text-black underline"
          >
            คลิกเพื่อเข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
