import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const resetPassword = () => {
  return (
    <Container>
      <div className="mx-auto flex min-h-screen w-80 flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <div className="py-3 text-5xl font-bold text-primary">
            รีเซ็ตรหัสผ่าน
          </div>
          <div className="text-xl font-medium text-accent-gray">
            กรุณากรอกรหัสผ่านใหม่
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-accent-light-gray px-4 py-2">
          <Icon
            icon="ph:lock-key-bold"
            className="text-xl text-accent-gray"
          ></Icon>
          <input
            type="password"
            placeholder="รหัสผ่านใหม่"
            className="bg-accent-light-gray outline-none placeholder:font-semibold placeholder:text-accent-gray"
          />
        </div>
        <Button
          text={"เปลี่ยนรหัสผ่าน"}
          variant={"primary"}
          className="w-full rounded-2xl text-xl font-semibold"
        />
      </div>
    </Container>
  );
};

export default resetPassword;

export const Layout = MainLayout;
