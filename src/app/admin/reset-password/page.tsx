import Button from "@/components/Button";
import Container from "@/components/Container";
import useResetPassword from "@/hooks/auth/useResetPassword";
import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/authStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type formValue = {
  password: string;
};

const resetPassword = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const { register, handleSubmit } = useForm<formValue>();
  const { mutate } = useResetPassword();

  const [resetPasswordToken, setResetPasswordToken] = useState<string | null>(
    null
  );

  useEffect(() => {
    const token = window.location.pathname.split("/").pop() || null;
    setResetPasswordToken(token);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/pets");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = (data: formValue) => {
    if (resetPasswordToken) {
      mutate({ ...data, token: resetPasswordToken });
    }
  };

  return (
    <Container>
      <div className="mx-auto flex min-h-screen w-80 flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <div className="py-3 text-5xl font-bold text-accent-red">
            รีเซ็ตรหัสผ่าน
          </div>
          <div className="text-xl font-medium text-accent-gray">
            กรุณากรอกรหัสผ่านใหม่
          </div>
        </div>
        <form
          className="flex w-full flex-col gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-row items-center gap-2 rounded-lg bg-accent-light-gray px-4 py-2">
            <Icon
              icon="ph:lock-key-bold"
              className="text-xl text-accent-gray"
            ></Icon>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              placeholder="รหัสผ่านใหม่"
              className="w-full bg-accent-light-gray outline-none placeholder:font-semibold placeholder:text-accent-gray"
            />
          </div>
          <Link to="/admin">
            <Button
              type="submit"
              text={"เปลี่ยนรหัสผ่าน"}
              variant={"accent-red"}
              rounded="2xl"
              className="w-full text-xl font-semibold"
            />
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default resetPassword;

export const Layout = MainLayout;
