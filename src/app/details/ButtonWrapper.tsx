import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="mt-5 flex w-80 flex-col justify-between">
      <div className="flex items-start gap-28">
        <div className="mb-4 flex gap-2 text-sm xl:flex-col">
          <div className="flex w-32 items-center justify-center gap-2 rounded-3xl bg-secondary px-3 py-1 font-semibold text-white ">
            <Icon icon="ph:eyedropper-bold" color="white" className="h-5 w-5" />
            <span>ฉีดวัคซีนแล้ว</span>
          </div>
          <div className="flex w-32 items-center justify-center gap-2 rounded-3xl bg-secondary px-3 py-1 font-semibold text-white ">
            <Icon icon="ph:medal" color="white" className="h-5 w-5" />
            <span>ทําหมั่นแล้ว</span>
          </div>
        </div>
        <Icon
          icon="ph:heart"
          color="#c81425"
          className="h-fit w-8 cursor-pointer"
        />
      </div>
      {isAdmin ? (
        <div className="flex gap-3 text-white">
          <button className="flex items-center gap-2 rounded-2xl  bg-primary px-7 py-2 text-sm font-semibold ">
            เปลี่ยนเป็น
            <br />
            ถูกรับเลี้ยงแล้ว
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-secondary px-6 py-1 text-white ">
            <Icon icon="lucide:trash-2" color="white" />
            <span>ลบโพสต์</span>
          </button>
        </div>
      ) : (
        <button className="rounded-2xl bg-primary py-3 text-white">
          รับเลี้ยงเลย
        </button>
      )}
    </div>
  );
};

export default ButtonWrapper;
