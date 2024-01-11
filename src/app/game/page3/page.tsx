import GameLayout from "@/layouts/GameLayout";
import OrangeCat from "../../../assets/game/OrangeCat.jpg";
import Button from "@/components/Button";

const GamePage3 = () => {
    const handleOnClickSave = () => {}
    const handleOnClickShare = () => {}
    return (
        <div className="flex gap-4 md:gap-6 w-full py-6 md:py-10 px-6 mx-auto justify-center">
            <div className="flex flex-col w-full max-w-80 gap-4 md:gap-6">
                {/* Header + Image */}
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="text-primary font-bold md:text-2xl">
                        คุณคือแม้ว
                    </div>
                    <div className="w-full aspect-[4:3] overflow-hidden rounded-2xl shadow-md">
                        <img src={OrangeCat} className="w-full h-full object-center object-contain" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-full bg-accent-light-gray text-center rounded-2xl px-6 py-2 text-primary font-bold text-2xl">
                        แมวส้ม
                    </div>
                    <div className="w-full break-words text-center text-lg">
                        คุณเป็นคนที่มีภาวะความเป็นผู้นำและมีความ เชื่อมั่นในตัวเองสูงเป็นคนที่มีเพื่อนเยอะมากๆ แม้ภายนอกจะดูเฟรนลี่ แต่ก็แอบมีกำแพง นิดนึงเพื่อป้องกันตัวเองไม่ให้ตัวเองผิดหวัง จึงมีนิสัยเหมือนแมวส้ม เพราะแมวสี เหล่านี้ส่วนใหญ่จะเป็นแมวที่มีความเป็นมิตร ขี้อ้อน ชอบเป็นหัวหน้าแก๊ง มีความเป็นตัวของ ตัวเองสูง ทำให้ไม่ชอบที่จะตามใจใคร แต่จะชอบตามใจตัวเอง อยากมาหาก็จะมา หาเองแล้วแต่อารมณ์
                    </div>
                </div>

                {/* Save and Share Button */}
                <div className="flex flex-row items-center justify-between flex-wrap gap-4">
                    <Button 
                    text="บันทึกลงเครื่อง"
                    icon="ic:baseline-save-alt"
                    onClick={handleOnClickSave}
                    rounded="2xl"
                    variant="primary"
                    />
                    <Button 
                    text="แชร์"
                    icon="ph:share"
                    onClick={handleOnClickShare}
                    rounded="2xl"
                    variant="accent-red"
                    />
                </div>
            </div>

        </div>
    );
}

export default GamePage3;

export const Layout = GameLayout;