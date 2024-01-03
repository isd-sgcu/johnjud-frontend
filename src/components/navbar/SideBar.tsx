import { Icon } from "@iconify/react";
import React from "react";
import blankProfile from "../../assets/navbar/blankProfile.svg";

interface SideBarProps {
  color: string;
}

const SideBar: React.FC<SideBarProps> = ({ color }) => {
  return (
    <div
      className={`h-full p-16 text-sm text-white ${color} w-[337px]`}
    >
      <div className="mb-9 pb-9 flex cursor-pointer items-center gap-4 border-b border-white ">
        <img src={blankProfile} alt="blank-profile" className="w-16 h-16"/>
        <span className="font-bold underline text-xl">เข้าสู่ระบบ</span>
      </div>
      <div>
        <div className="flex flex-col justify-start gap-6">
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon={"ph:house"} color="white" className="h-6 w-6" />
            <span>หน้าหลัก</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon
              icon="streamline:chess-knight"
              color="white"
              className="h-6 w-6"
            />
            <span>สัตว์เลี้ยง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon="ph:game-controller" color="white" className="h-6 w-6" />
            <span>เล่นเกม</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4">
            <Icon icon="ph:moon-stars" color="white" className="h-6 w-6" />
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
