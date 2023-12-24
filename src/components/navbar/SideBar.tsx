import houseIcon from "/src/assets/navbar/House.svg";
import chessIcon from "/src/assets/navbar/chess.svg";
import gameControllerIcon from "/src/assets/navbar/gamecontroller.svg";
import moonStarIcon from "/src/assets/navbar/MoonStars.svg";
import questionIcon from "/src/assets/navbar/Question.svg";
import infoIcon from "/src/assets/navbar/Info.svg";
import lockKeyIcon from "/src/assets/navbar/LockKey.svg";
import blankProfile from "/src/assets/navbar/blankProfile.svg";
import Page from "./Page";
import React from "react";

interface props{
    page : Page,
}

const SideBar : React.FC<props> = ({page}) => {
    let color;
    switch(page){
        case Page.MAIN :
            color = "bg-primary";
            break;
        case Page.ADMIN :
            color = "bg-secondary";
            break;
        case Page.FORTUNE :
            color = "bg-johnjud-purple";
            break;
    }

    return (  
        <div className={`h-full text-white w-52 p-6 ${color}`}>
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white">
                <img src={blankProfile} alt="blank-profile" />
                <span>เข้าสู่ระบบ</span>
            </div>
            <div className="p-2 text-sm">
                <div className="flex flex-col gap-6 justify-start">
                    <div className="flex items-center gap-1.5">
                    <img src={houseIcon} alt="home-icon" className="w-6 h-6"/>
                    <span>หน้าหลัก</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={chessIcon} alt="pets-icon" className="w-6 h-6"/>
                    <span>สัตว์เลี้ยง</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={gameControllerIcon} alt="game-icon" className="w-6 h-6"/>
                    <span>เล่นเกม</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={moonStarIcon} alt="luck-icon" className="w-6 h-6"/>
                    <span>ดูดวง</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={questionIcon} alt="qa-icon" className="w-6 h-6"/>
                    <span>คำถามที่พบบ่อย</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={infoIcon} alt="about-icon" className="w-6 h-6"/>
                    <span>เกี่ยวกับเรา</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                    <img src={lockKeyIcon} alt="login-icon" className="w-6 h-6"/>
                    <span >Admin Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SideBar;