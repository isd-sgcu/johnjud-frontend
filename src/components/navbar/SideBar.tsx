import React from "react";
import blankProfile from "../../assets/navbar/blankProfile.svg";
import Page from "../../types/Page";
import {Icon} from "@iconify/react";

interface SideBarProps {
  page: Page;
}

const SideBar: React.FC<SideBarProps> = ({ page }) => {
  let color;
  switch (page) {
    case Page.MAIN:
      color = "bg-primary";
      break;
    case Page.ADMIN:
      color = "bg-secondary";
      break;
    case Page.FORTUNE:
      color = "bg-johnjud-purple";
      break;
  }

  return (
    <div className={`h-full p-8 text-white ${color}`}>
      <div className="mb-6 flex items-center gap-4 border-b border-white pb-6">
        <img src={blankProfile} alt="blank-profile" />
        <span>เข้าสู่ระบบ</span>
      </div>
      <div className="p-2 text-sm">
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
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon="ph:question" color="white" width="24" height="24" />
            <span>คำถามที่พบบ่อย</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon="ph:info" color="white" width="24" height="24" />
            <span>เกี่ยวกับเรา</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <Icon icon="ph:lock-key" color="white" width="24" height="24" />
            <span>Admin Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
