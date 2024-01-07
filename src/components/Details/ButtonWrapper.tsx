import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="flex flex-col gap-2.5 font-semibold text-white xl:justify-between">
      <div className="justify-between xl:flex">
        <div className="flex gap-4 xl:flex-col xl:items-start xl:gap-4">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent-red px-3 py-1 shadow-[0_0_2px_1px] shadow-zinc-300">
            <Icon icon="ph:eyedropper-bold" color="white" className="h-4 w-4" />
            <span>ฉีดวัคซีนแล้ว</span>
          </div>
          <div className="justify-centerpy-1 flex items-center gap-2 rounded-full bg-accent-red px-3 py-1 shadow-[0_0_2px_1px] shadow-zinc-300">
            <Icon icon="ph:medal" color="white" className="h-4 w-4" />
            <span>ทําหมันแล้ว</span>
          </div>
        </div>
        {!isAdmin && (
          <Icon
            icon="ph:heart"
            color="#c81425"
            className="hidden h-fit w-8 cursor-pointer xl:inline-block"
          />
        )}
      </div>
      {isAdmin ? (
        <div className="flex justify-between xl:gap-8">
          <div className="flex items-center rounded-2xl bg-primary px-6 py-2 shadow-[0_0_2px_1px] shadow-zinc-300">
            ถูกรับเลี้ยงแล้ว
          </div>
          <button className="flex items-center gap-2 rounded-2xl bg-accent-red px-6 py-2 text-lg font-normal shadow-[0_0_2px_1px] shadow-zinc-300">
            <Icon icon="lucide:trash-2" color="white" />
            <span>ลบโพสต์</span>
          </button>
        </div>
      ) : (
        <button className="rounded-2xl bg-primary py-2 text-white shadow-[0_0_2px_1px] shadow-zinc-300 xl:px-24">
          รับเลี้ยงเลย
        </button>
      )}
    </div>
  );
};

export default ButtonWrapper;
