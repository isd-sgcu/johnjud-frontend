import type { SignInCredentials } from "@/api/auth/signIn";
import checkIcon from "@/assets/formIcon/check.svg";
import lockIcon from "@/assets/formIcon/lock.svg";
import userIcon from "@/assets/formIcon/user.svg";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";

interface LoginFormProps {
  mutation: (data: SignInCredentials) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ mutation }) => {
  const { register, handleSubmit } = useForm<SignInCredentials>();

  const onSubmit = (data: SignInCredentials) => {
    mutation(data);
  };

  return (
    <form
      className="flex w-full flex-col items-center justify-center space-y-20 sm:w-1/2 md:w-6/12 lg:w-4/12 xl:w-3/12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <div className="flex w-full items-center rounded-lg bg-accent-light-gray px-2.5 py-2.5 outline-none">
          <img src={userIcon} alt="Icon" className="mx-2" />
          <input
            {...register("email", { required: true })}
            type="email"
            required
            placeholder="อีเมล"
            className="w-full bg-accent-light-gray font-semibold text-accent-gray outline-none"
          />
        </div>
        <div className="flex w-full items-center rounded-lg bg-accent-light-gray px-2.5 py-2.5 outline-none">
          <img src={lockIcon} alt="Icon" className="mx-2" />
          <input
            {...register("password", { required: true })}
            type="password"
            required
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
      <div className="flex w-full flex-col items-center justify-center">
        <Button
          type="submit"
          text="เข้าสู่ระบบ"
          variant="accent-red"
          rounded="2xl"
          className="w-full px-0 text-xl font-semibold md:w-auto md:px-28"
        />
      </div>
    </form>
  );
};

export default LoginForm;
