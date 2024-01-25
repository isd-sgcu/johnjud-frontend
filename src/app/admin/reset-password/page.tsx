import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type formValue = {
  password: string;
};

const resetPassword = () => {
  const { register, handleSubmit } = useForm<formValue>();

  const onSubmit = (data: formValue) => {
    console.log("User password:", data.password);
    console.log("HI");
  };

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
              variant={"primary"}
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
