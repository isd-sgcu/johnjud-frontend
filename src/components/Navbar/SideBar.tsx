import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SideBar = ({
  color,
  isShow,
  isExist,
  setToggle,
}: {
  color: string;
  isShow: boolean;
  isExist: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`bottom-0 right-0 top-0 z-[1003] space-y-8 px-6 py-5 text-sm text-white transition xl:w-64 xl:text-base ${color} ${
        isExist ? "fixed" : "hidden"
      } ${isShow ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-row items-center justify-end">
        <button
          type="button"
          onClick={() => setToggle(false)}
          className="cursor-pointer outline-none"
        >
          <Icon icon="ph:x-bold" className="h-8 w-8" />
        </button>
      </div>
      <div className="px-2">
        <div className="flex flex-col justify-start gap-6">
          <Link
            to="/home"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:house" color="white" className="h-6 w-6" />
            <span>หน้าหลัก</span>
          </Link>
          <Link
            to="/pets"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:horse" color="white" className="h-6 w-6" />
            <span>สัตว์เลี้ยง</span>
          </Link>
          <Link
            to="/game"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:game-controller" color="white" className="h-6 w-6" />
            <span>เล่นเกม</span>
          </Link>
          <Link
            to="/horo"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:moon-stars" color="white" className="h-6 w-6" />
            <span>ดูดวง</span>
          </Link>
          <Link
            to="/frequently-asked-questions"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:question" color="white" className="h-6 w-6" />
            <span>คำถามที่พบบ่อย</span>
          </Link>
          <Link
            to="/about"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:info" color="white" className="h-6 w-6" />
            <span>เกี่ยวกับเรา</span>
          </Link>
          <Link
            to="/admin"
            className="flex cursor-pointer items-center gap-1.5 xl:gap-4"
          >
            <Icon icon="ph:lock-key" color="white" className="h-6 w-6" />
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
