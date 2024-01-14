import Button from "@/components/Button";
import Container from "@/components/Container";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen && (
        <Container>
          <div className="fixed bottom-0 left-0 right-0 top-0 z-[2000] h-dvh w-full bg-black/40"></div>
          <div className="fixed bottom-48 left-[50%] z-[3000] -translate-x-1/2 rounded-2xl bg-white p-8">
            <div className="flex flex-col items-center gap-4 ">
              <div className="flex flex-row gap-1">
                <div className="text-xl font-semibold leading-[21px] text-primary">
                  อีเมลรีเซ็ตถูกส่งแล้ว
                </div>
                <Icon
                  icon="ph:check-circle-bold"
                  className="text-2xl text-primary"
                />
              </div>
              <div className="flex flex-col gap-1 text-center text-sm font-normal tracking-tight text-accent-gray">
                <div>กรุณาเช็คอีเมลของท่าน</div>
                <div>หากไม่พบอีเมลกรุณาตรวจสอบ ถังขยะ</div>
              </div>
              <Link to={"/login"}>
                <Button
                  text={"กลับไปยังหน้าล็อกอิน"}
                  variant={"primary"}
                  rounded="full"
                  className="w-[209px] py-2 text-sm"
                />
              </Link>
            </div>
          </div>
        </Container>
      )}
    </Container>
  );
};

export default ForgetPassword;

export const Layout = GameLayout;
