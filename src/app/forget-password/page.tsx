import Button from "@/components/Button";
import Container from "@/components/Container";
import EmailVerification from "@/components/Modal/EmailVerification";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
const ForgetPassword = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center">
        <div className="py-2 text-4xl font-bold text-primary lg:py-3 lg:text-5xl">
          ลืมรหัสผ่าน?
        </div>
        <div className="text-base font-medium text-accent-gray lg:text-xl">
          กรุณากรอกอีเมลที่ท่านใช้สมัคร
        </div>
      </div>
      <div className="flex w-[304px] flex-row items-center gap-2 rounded-lg bg-accent-light-gray px-4 py-2">
        <Icon icon="ph:user-bold" className="text-xl text-accent-gray" />
        <input
          type="email"
          placeholder="อีเมล"
          className="text-semibold w-full bg-accent-light-gray text-base text-accent-gray outline-none"
        />
      </div>
      <div>
        <Button
          text={"รีเซตรหัสผ่าน"}
          variant={"primary"}
          rounded="2xl"
          className="mb-4 px-24 text-xl text-white"
          onClick={() => setModalOpen(true)}
        />
        <div className="flex flex-row items-center justify-center">
          <Link
            to={"/login"}
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
    </Container>
  );
};

export default ForgetPassword;

export const Layout = GameLayout;
