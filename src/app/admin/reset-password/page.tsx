import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const resetPassword = () => {
  return (
    <Container>
      <div>
        <div>
          <div>รีเซ็ตรหัสผ่าน</div>
          <div>กรุณากรอกรหัสผ่านใหม่</div>
        </div>
        <div>
          <Icon icon="ph:lock-key"></Icon>
          <input type="password" placeholder="รหัสผ่านใหม่" />
        </div>
        <Button text={"เปลี่ยนรหัสผ่าน"} variant={"primary"} />
      </div>
    </Container>
  );
};

export default resetPassword;

export const Layout = MainLayout;
