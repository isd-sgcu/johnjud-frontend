import Button from "@/components/Button";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const forgetPassword = () => {
  return (
    <div className="flex flex-col p-3">
      <div>
        <div className="py-2 text-4xl font-bold text-primary">ลืมรหัสผ่าน?</div>
        <div className="text-medium text-base text-accent-gray">
          กรุณากรอกอีเมลที่ท่านใช้สมัคร
        </div>
      </div>
      <div>
        <Icon icon="ph:user-bold" className="text-accent-gray" />
        <input type="email" placeholder="อีเมล" />
      </div>
      <div>
        <Button
          text={"รีเซตรหัสผ่าน"}
          variant={"primary"}
          className="rounded-2xl px-24 text-xl text-white"
        />
        <div>
          <Link to={"/login"}>
            <div className="text-sm font-medium text-primary">
              กลับไปหน้าล็อกอิน
            </div>
            <Icon icon="ph:arrow-left-bold" className="font-2xl text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default forgetPassword;

export const Layout = GameLayout;
