import GameLayout from "@/layouts/GameLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const GamePage1 = () => {
    const answers = ["เป็นฝ่ายไปแกล้งคนอื่นเขาหน่ะสิ พอได้แกล้งคนอื่นแล้วมันสนุกดีนี่" , "โดนแกล้งตลอดเลยย ไม่รู้ทำไม แล้วดันแกล้งกลับไม่ได้ด้วยนี่สิ เศร้าเลย" , "เป็นฝ่ายสมทบกับคนแกล้งหล่ะมั้ง ไม่ได้เริ่มเอง แต่ขอตามน้ำไปแระกัน มันก็ดูสนุกดีอ่ะ" , "โดนแกล้งบ่อยอยู่นะ แต่ก็เอาคืนตลอดจ้าา ไม่ยอมโดนอยู่ฝ่ายเดียวหรอก"];
    const headerText = "เวลาเล่นกันในแก๊งเพื่อน คุณมักจะเป็นคนประเภทไหน";
    const index = 6;
    return ( 
        <div className="flex flex-col w-full pt-[8.25rem] items-center justify-end bg-primary-variant">
            <div className="flex bg-white rounded-t-2xl w-full h-full p-6 justify-center">
                <div className="flex flex-col items-center w-full gap-6 max-w-80">
                    {/* Header */}
                    <div className="relative flex flex-row flex-shrink gap-6 w-full items-center">
                        <div className="relative flex w-fit h-fit">
                            <Icon icon="material-symbols:circle" className="w-14 h-14 text-primary"/>
                            <div className="absolute flex m-auto left-0 right-0 self-center justify-center text-2xl text-white font-bold select-none">{index}</div>
                        </div>
                        <span className="text-2xl text-primary font-bold min-w-0 break-words">{headerText}</span>
                    </div>

                    {/* Answers */}
                    <div className="flex flex-col w-full gap-6">
                        {answers.map((ans ,index) => {
                            return (
                                <div key={index} className="w-full text-center bg-accent-red rounded-2xl px-6 py-2 text-white font-semibold break-words">
                                    {ans}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamePage1;

export const Layout = GameLayout;