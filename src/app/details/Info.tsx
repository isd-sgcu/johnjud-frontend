import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonWrapper from "./ButtonWrapper";

const Info = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="flex w-full flex-col items-center bg-white p-6 shadow shadow-zinc-300 xl:-ml-2 xl:w-fit xl:rounded-2xl">
      <div className="flex h-full flex-col xl:flex-row xl:gap-10 xl:pl-28">
        <div className="w-80 text-primary">
          <div className="mb-4 flex justify-between text-2xl font-bold underline underline-offset-8">
            <span>รายละเอียด</span>
            {isAdmin ? (
              <Icon
                icon="mynaui:pencil"
                color="#c81425"
                className="m-2 h-fit w-6"
              />
            ) : (
              <Icon
                icon="ph:heart"
                color="#c81425"
                className="h-fit w-8 xl:hidden"
              />
            )}
          </div>
          <div className="mb-3 flex gap-3">
            <span className="flex items-center">
              <Icon icon="ph:paw-print" color="#08878e" className="mr-2" />
              เพศ:
            </span>
            <span className="font-semibold text-black">ผู้</span>
          </div>
          <div className="mb-3 flex gap-3">
            <span className="flex items-center">
              <Icon icon="ph:star" color="#08878e" className="mr-2" />
              พันธ์ุ:
            </span>
            <span className="font-semibold text-black">เเลบราดอร์</span>
          </div>
          <div className="mb-3 flex gap-3">
            <span className="flex items-center">
              <Icon icon="carbon:calendar" color="#08878e" className="mr-2" />
              อายุ:
            </span>
            <span className="font-semibold text-black">3 ปี 1 เดือน</span>
          </div>
          <div className="mb-3 flex gap-3">
            <span className="flex items-center">
              <Icon icon="ph:music-notes" color="#08878e" className="mr-2" />
              นิสัย:
            </span>
            <span className="font-semibold text-black">ดุร้าย</span>
          </div>
        </div>
        <div className="hidden w-[0.1px] bg-zinc-300 shadow-2xl shadow-zinc-500 xl:inline-block"></div>
        <ButtonWrapper isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Info;
