import { Icon } from "@iconify/react";
import React from "react";
import blankProfile from "../../assets/navbar/blankProfile.svg";

interface SideBarProps {
  color: string;
}

const SideBar: React.FC<SideBarProps> = ({ color }) => {
  return (
    <div className={`h-full p-6 py-8  text-sm text-white ${color} w-[180px] xl:w-64 xl:pl-10 xl:pr-16 xl:pt-10`}>
      <div className="mb-6 flex items-center gap-4 border-b border-white pb-6 cursor-pointer">
        <img src={blankProfile} alt="blank-profile" />
        <span className="font-bold underline">เข้าสู่ระบบ</span>
      </div>
      <div>
        <div className="flex flex-col justify-start gap-6">
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon={"ph:house"} color="white" className="w-6 h-6"/>
            <span>หน้าหลัก</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon="streamline:chess-knight"  color="white" className="w-6 h-6"/>
            <span>สัตว์เลี้ยง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon="ph:game-controller" color="white" className="w-6 h-6"/>
            <span>เล่นเกม</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
          <Icon icon="ph:moon-stars" color="white"  className="h-6 w-6" />
            <span>ดูดวง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon="ph:question" color="white" width="24" height="24" />
            <span>คำถามที่พบบ่อย</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon="ph:info" color="white" width="24" height="24" />
            <span>เกี่ยวกับเรา</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon="ph:lock-key" color="white" width="24" height="24" />
            <span>Admin Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
