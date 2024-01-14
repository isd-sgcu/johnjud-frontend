import blankProfile from "@/assets/navbar/blankProfile.svg";
import Container from "@/components/Container";
import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react";

const favourite = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={blankProfile}
            alt="blank-profile"
            className="h-[100px] w-[100px]"
          />
          <div className="text-xl">
            Welcome,&nbsp;
            <span className="font-bold">This is JohnJud!</span>
          </div>
        </div>
        <Icon icon="ph:paw-print" className="text-2xl text-primary"></Icon>
        <div>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
            <div className="font-semibold text-primary lg:text-xl">
              สัตว์เลี้ยงที่ถูกใจ
            </div>
            <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
          </div>
        </div>
        <div>-- PET CARD TO BE IMPLEMENTED --</div>
      </div>
    </Container>
  );
};

export default favourite;

export const Layout = GameLayout;
