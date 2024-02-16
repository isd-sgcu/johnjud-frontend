import Button from "@/components/Button";
import Container from "@/components/Container";
import EmailVerification from "@/components/Modal/EmailVerification";
import useForgetPassword from "@/hooks/auth/useForgetPassword";
import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/authStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
type formValue = {
  email: string;
};

const ForgetPassword = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit } = useForm<formValue>();

  const { mutate } = useForgetPassword();

  const { isLoggedIn } = useAuthStore();

  const navigate = useNavigate();

  const onSubmit = (data: formValue) => {
    mutate(data);
    setModalOpen(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/pets");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container>
      <form
        className="flex min-h-screen flex-col items-center justify-center gap-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <div className="py-2 text-4xl font-bold text-primary lg:py-3 lg:text-5xl">
            ลืมรหัสผ่าน?
          </div>
          <div className="text-base font-medium text-accent-gray lg:text-xl">
            กรุณากรอกอีเมลที่ท่านใช้สมัคร
          </div>
        </div>
        <div className="flex w-80 flex-row items-center gap-2 rounded-lg bg-accent-light-gray px-4 py-2">
          <Icon icon="ph:user-bold" className="text-xl text-accent-gray" />
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            required
            placeholder="อีเมล"
            className="text-semibold w-full bg-accent-light-gray text-base text-accent-gray outline-none"
          />
        </div>
        <div className="flex w-80 flex-col justify-center">
          <Button
            text={"รีเซตรหัสผ่าน"}
            variant={"primary"}
            rounded="2xl"
            type="submit"
            className="mb-4 px-24 text-xl text-white"
          />
          <div className="flex flex-row items-center justify-center">
            <Link
              to="/admin"
              className="flex flex-row items-center justify-center gap-2"
            >
              <Icon icon="ph:arrow-left" className="text-2xl text-primary" />
              <div className="text-sm font-medium text-primary">
                กลับไปหน้าล็อกอิน
              </div>
            </Link>
          </div>
        </div>
        {modalOpen && <EmailVerification />}
      </form>
    </Container>
  );
};

export default ForgetPassword;

export const Layout = MainLayout;
