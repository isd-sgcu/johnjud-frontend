import GameLayout from "@/layouts/GameLayout";
import phoneIcon from "../../../assets/game/phone-with-text.png";

const GamePage2 = () => {
    const text = "เอาล่ะ เหลือข้อสุดท้ายแล้วสินะ";
    return ( 
        <div className="flex flex-col w-full py-6 lg:py-10 px-6 items-center bg-primary-variant">
            <div className="flex flex-col flex-grow w-full h-screen max-w-3xl max-h-[32rem] bg-white rounded-2xl items-center justify-center gap-6">
                <img src={phoneIcon} alt="phoneIcon" className="w-24 h-24"/>
                <div className="w-full px-6 justify-center text-center break-words text-xl font-bold">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default GamePage2;
export const Layout = GameLayout;