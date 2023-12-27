import React from "react";
import chessIcon from "../../assets/navbar/Chess.svg";
import gameControllerIcon from "../../assets/navbar/GameController.svg";
import houseIcon from "../../assets/navbar/House.svg";
import infoIcon from "../../assets/navbar/Info.svg";
import lockKeyIcon from "../../assets/navbar/LockKey.svg";
import moonStarIcon from "../../assets/navbar/MoonStars.svg";
import questionIcon from "../../assets/navbar/Question.svg";
import blankProfile from "../../assets/navbar/blankProfile.svg";
import Page from "./Page";

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
            <img src={houseIcon} alt="home-icon" className="h-6 w-6" />
            <span>หน้าหลัก</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={chessIcon} alt="pets-icon" className="h-6 w-6" />
            <span>สัตว์เลี้ยง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={gameControllerIcon} alt="game-icon" className="h-6 w-6" />
            <span>เล่นเกม</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={moonStarIcon} alt="luck-icon" className="h-6 w-6" />
            <span>ดูดวง</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={questionIcon} alt="qa-icon" className="h-6 w-6" />
            <span>คำถามที่พบบ่อย</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={infoIcon} alt="about-icon" className="h-6 w-6" />
            <span>เกี่ยวกับเรา</span>
          </div>
          <div className="flex cursor-pointer items-center gap-1.5">
            <img src={lockKeyIcon} alt="login-icon" className="h-6 w-6" />
            <span>Admin Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
