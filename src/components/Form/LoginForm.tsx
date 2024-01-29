import checkIcon from "@/assets/formIcon/check.svg";
import lockIcon from "@/assets/formIcon/lock.svg";
import userIcon from "@/assets/formIcon/user.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";

type formValue = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<formValue>();

  const onSubmit = (data: formValue) => {
    console.log("Email :", data.email);
    console.log("Password :", data.password);
  };

  return (
    <form
      className="flex w-full flex-col items-center justify-center space-y-20 sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-80 flex-col items-center justify-center space-y-4">
        <div className="flex w-full items-center rounded-lg bg-accent-light-gray px-2.5 py-2.5 outline-none">
          <img src={userIcon} alt="Icon" className="mx-2" />
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="อีเมล"
            className="w-full bg-accent-light-gray font-semibold text-accent-gray outline-none"
          />
        </div>
        <div className="flex w-full items-center rounded-lg bg-accent-light-gray px-2.5 py-2.5 outline-none">
          <img src={lockIcon} alt="Icon" className="mx-2" />
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            placeholder="รหัสผ่าน"
            className="w-full bg-accent-light-gray font-semibold text-accent-gray outline-none"
          />
        </div>
        <div className="flex w-full justify-between">
          <label className="flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              id="custom-checkbox"
            />
            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-light-gray peer-checked:hidden" />
            <div className="hidden h-5 w-5 items-center justify-center rounded-sm bg-primary peer-checked:flex">
              <img src={checkIcon} alt="Icon" className="h-4 w-4" />
            </div>

            <span className="ml-2 text-black">จดจำฉัน</span>
          </label>
          <Link
            to="/admin/forget-password"
            className="text-base font-medium text-accent-gray underline"
          >
            ลืมรหัสผ่าน?
          </Link>
        </div>
      </div>
      <Link to="/home">
        <Button
          type="submit"
          rounded="2xl"
          text={"เข้าสู่ระบบ"}
          variant={"primary"}
          className="px-24 py-2 text-2xl font-semibold"
        />
      </Link>
    </form>
  );
};

export default LoginForm;
