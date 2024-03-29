import Button from "@/components/Button";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
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
          <h1 className="py-2 text-4xl font-bold text-accent-red lg:py-3 lg:text-5xl">
            ลืมรหัสผ่าน?
          </h1>
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
            text="รีเซตรหัสผ่าน"
            variant="accent-red"
            rounded="2xl"
            type="submit"
            className="mb-4 px-24 text-xl font-semibold text-white"
          />

          <div className="flex flex-row items-center justify-center">
            <Link
              to="/admin"
              className="flex flex-row items-center justify-center gap-2"
            >
              <Icon icon="ph:arrow-left" className="text-2xl text-accent-red" />
              <div className="text-sm font-medium text-accent-red">
                กลับไปหน้าล็อกอิน
              </div>
            </Link>
          </div>
        </div>
        <Modal
          title="อีเมลรีเซ็ตถูกส่งแล้ว"
          icon="ph:check-circle-bold"
          open={modalOpen}
          setOpen={setModalOpen}
          button={
            <Link to="/admin">
              <Button
                text="กลับไปหน้าเข้าสู่ระบบ"
                variant="primary"
                rounded="full"
              />
            </Link>
          }
        >
          <p className="text-accent-gray">
            กรุณาเช็คอีเมลของท่าน <br />
            หากไม่พบอีเมลกรุณาตรวจสอบถังขยะ
          </p>
        </Modal>
      </form>
    </Container>
  );
};

export default ForgetPassword;

export const Layout = MainLayout;
