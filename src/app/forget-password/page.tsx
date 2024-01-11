import Button from "@/components/Button";
import Container from "@/components/Container";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const forgetPassword = () => {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div>
        <div className="py-2 text-4xl font-bold text-primary">ลืมรหัสผ่าน?</div>
        <div className="text-medium text-base text-accent-gray">
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
        />
        <div className="flex flex-row items-center justify-center bg-pink-300">
          <Link
            to={"/login"}
            className="flex flex-row items-center justify-center gap-2 bg-green-300"
          >
            <Icon icon="ph:arrow-left" className="text-2xl text-primary" />
            <div className="text-sm font-medium text-primary">
              กลับไปหน้าล็อกอิน
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default forgetPassword;

export const Layout = GameLayout;
