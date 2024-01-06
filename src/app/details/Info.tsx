import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonWrapper from "./ButtonWrapper";

const Info = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="flex w-full flex-col  gap-2.5 bg-white p-6 shadow-[0_0_2px_1px] shadow-zinc-300 xl:flex-row xl:justify-between xl:rounded-br-2xl xl:rounded-tr-2xl xl:px-24 xl:py-8">
      <div className="flex w-80 flex-col gap-4 text-primary">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 border-b-2 border-primary">
            <p className="text-2xl font-bold">รายละเอียด</p>
            {isAdmin && (
              <Icon icon="mynaui:pencil" color="#c81425" className="h-8 w-8" />
            )}
          </div>
          {!isAdmin && (
            <Icon
              icon="ph:heart"
              color="#c81425"
              className="h-fit w-8 xl:hidden"
            />
          )}
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-3">
            <Icon icon="ph:paw-print" color="#08878e" />
            เพศ:
          </span>
          <span className="font-semibold text-black">ผู้</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-3">
            <Icon icon="ph:star" color="#08878e" />
            พันธ์ุ:
          </span>
          <span className="font-semibold text-black">เเลบราดอร์</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-3">
            <Icon icon="carbon:calendar" color="#08878e" />
            อายุ:
          </span>
          <span className="font-semibold text-black">3 ปี 1 เดือน</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-3">
            <Icon icon="ph:music-notes" color="#08878e" />
            นิสัย:
          </span>
          <span className="font-semibold text-black">ดุร้าย</span>
        </div>
      </div>
      <div className="hidden w-[1px] bg-zinc-300 xl:inline-block"></div>
      <ButtonWrapper isAdmin={isAdmin} />
    </div>
  );
};

export default Info;
