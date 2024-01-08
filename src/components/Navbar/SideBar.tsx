import blankProfile from "@/assets/navbar/blankProfile.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SideBar = ({
  color,
  isShow,
  isExist,
}: {
  color: string;
  isShow: boolean;
  isExist: boolean;
}) => {
  return (
    <div
      className={`bottom-0 right-0 top-0 z-[1003] px-8 py-6 text-sm text-white transition xl:w-64 xl:text-base ${color} ${
        isExist ? "fixed" : "hidden"
      } ${isShow ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mb-6 flex cursor-pointer  items-center gap-4 border-b border-white pb-6 xl:mb-9 xl:pb-9">
        <img
          src={blankProfile}
          alt="blank-profile"
          className="h-12 w-12 xl:h-16 xl:w-16"
        />
        <Link to="/login" className="text-sm font-bold underline xl:text-xl">
          เข้าสู่ระบบ
        </Link>
      </div>
      <div>
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
