import Container from "@/components/Container";
import Divider from "@/components/Divider";
import MainLayout from "@/layouts/MainLayout";

const favourite = () => {
  return (
    <>
      <Container className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl">
            Welcome,&nbsp;
            <span className="font-bold">This is JohnJud!</span>
          </div>
        </div>
      </Container>
      <Divider variant="primary"></Divider>
      <Container className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
          <div className="font-semibold text-primary lg:text-xl">
            สัตว์เลี้ยงที่ถูกใจ
          </div>
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
        </div>
        <div>-- PET CARD TO BE IMPLEMENTED --</div>
      </Container>
    </>
  );
};

export default favourite;

export const Layout = MainLayout;
