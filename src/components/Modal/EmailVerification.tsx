import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";

const EmailVerification = () => {
  return (
    <Container>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[2000] h-screen w-full bg-black/40"></div>
      <div className="fixed bottom-48 left-[50%] z-[2500] -translate-x-1/2 rounded-2xl bg-white p-8">
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
          <Link to="/admin">
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
  );
};

export default EmailVerification;
