import { Icon } from "@iconify/react";
import React from "react";
import blankProfile from "../../assets/navbar/blankProfile.svg";

interface SideBarProps {
  color: string;
}

const SideBar: React.FC<SideBarProps> = ({ color }) => {
  return (
    <div className={`h-full px-8 py-6 text-sm text-white xl:p-16 ${color}`}>
      <div className="mb-6 flex cursor-pointer  items-center gap-4 border-b border-white pb-6 xl:mb-9 xl:pb-9">
        <img
          src={blankProfile}
          alt="blank-profile"
          className="h-12 w-12 xl:h-16 xl:w-16"
        />
        <span className="text-sm font-bold underline xl:text-xl">
          เข้าสู่ระบบ
        </span>
      </div>
      <div>
        <div className="flex flex-col justify-start gap-6">
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon={"ph:house"} color="white" className="h-6 w-6" />
            <span>หน้าหลัก</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:horse" color="white" className="h-6 w-6" />
            <span>สัตว์เลี้ยง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:game-controller" color="white" className="h-6 w-6" />
            <span>เล่นเกม</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:moon-stars" color="white" className="h-6 w-6" />
            <span>ดูดวง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:question" color="white" className="h-6 w-6" />
            <span>คำถามที่พบบ่อย</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:info" color="white" className="h-6 w-6" />
            <span>เกี่ยวกับเรา</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5 xl:gap-4">
            <Icon icon="ph:lock-key" color="white" className="h-6 w-6" />
            <span>Admin Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
