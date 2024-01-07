import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonWrapper from "./ButtonWrapper";

const Info = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="flex w-full flex-col gap-4 bg-white p-6 shadow-[0_0_2px_1px] shadow-zinc-300 xl:rounded-br-2xl xl:rounded-tr-2xl xl:px-24 xl:py-8">
      <div className="flex items-center justify-between">
        <p className="border-b-2 border-primary text-2xl font-bold text-primary">
          รายละเอียด
        </p>
        {isAdmin ? (
          <Icon icon="mynaui:pencil" className="h-6 w-6 text-accent-red" />
        ) : (
          <Icon
            icon="ph:heart-straight-bold"
            className="h-6 w-6 text-accent-red"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
        <div className="flex w-80 flex-col gap-4 text-primary">
          <div className="flex gap-4">
            <span className="flex items-center gap-3">
              <Icon icon="ph:paw-print" className="text-primary" />
              เพศ:
            </span>
            <span className="font-semibold text-black">ผู้</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-3">
              <Icon icon="ph:star" className="text-primary" />
              พันธ์ุ:
            </span>
            <span className="font-semibold text-black">เเลบราดอร์</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-3">
              <Icon icon="carbon:calendar" className="text-primary" />
              อายุ:
            </span>
            <span className="font-semibold text-black">3 ปี 1 เดือน</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-3">
              <Icon icon="ph:music-notes" className="text-primary" />
              นิสัย:
            </span>
            <span className="font-semibold text-black">ดุร้าย</span>
          </div>
        </div>
        <div className="hidden w-[1.5px] bg-zinc-300 shadow-[0_0_5px_0.1px] shadow-zinc-300 xl:inline-block"></div>
        <ButtonWrapper isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Info;
