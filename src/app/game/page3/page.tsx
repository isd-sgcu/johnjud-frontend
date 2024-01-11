import ResultGame from "@/components/Game/ResultGame";
import GameLayout from "@/layouts/GameLayout";
import OrangeCat from "../../../assets/game/OrangeCat.jpg";

const GamePage3 = () => {
  const header = "คุณคือแม้ว";
  const image = OrangeCat;
  const infoHeader = "แม้วส้ม";
  const infoText =
    "คุณเป็นคนที่มีภาวะความเป็นผู้นำและมีความ เชื่อมั่นในตัวเองสูงเป็นคนที่มีเพื่อนเยอะมากๆ แม้ภายนอกจะดูเฟรนลี่ แต่ก็แอบมีกำแพง นิดนึงเพื่อป้องกันตัวเองไม่ให้ตัวเองผิดหวัง จึงมีนิสัยเหมือนแมวส้ม เพราะแมวสี เหล่านี้ส่วนใหญ่จะเป็นแมวที่มีความเป็นมิตร ขี้อ้อน ชอบเป็นหัวหน้าแก๊ง มีความเป็นตัวของ ตัวเองสูง ทำให้ไม่ชอบที่จะตามใจใคร แต่จะชอบตามใจตัวเอง อยากมาหาก็จะมา หาเองแล้วแต่อารมณ์";
  const handleOnClickSave = () => {};
  const handleOnClickShare = () => {};
  return (
    <ResultGame
      header={header}
      image={image}
      infoHeader={infoHeader}
      infoText={infoText}
      handleOnClickSave={handleOnClickSave}
      handleOnClickShare={handleOnClickShare}
    />
  );
};

export default GamePage3;

export const Layout = GameLayout;
