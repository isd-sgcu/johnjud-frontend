import MultipleChoice from "@/components/Game/MultipleChoice";
import GameLayout from "@/layouts/GameLayout";

const GamePage1 = () => {
  const answers = [
    "เป็นฝ่ายไปแกล้งคนอื่นเขาหน่ะสิ พอได้แกล้งคนอื่นแล้วมันสนุกดีนี่",
    "โดนแกล้งตลอดเลยย ไม่รู้ทำไม แล้วดันแกล้งกลับไม่ได้ด้วยนี่สิ เศร้าเลย",
    "เป็นฝ่ายสมทบกับคนแกล้งหล่ะมั้ง ไม่ได้เริ่มเอง แต่ขอตามน้ำไปแระกัน มันก็ดูสนุกดีอ่ะ",
    "โดนแกล้งบ่อยอยู่นะ แต่ก็เอาคืนตลอดจ้าา ไม่ยอมโดนอยู่ฝ่ายเดียวหรอก",
  ];
  const headerText = "เวลาเล่นกันในแก๊งเพื่อน คุณมักจะเป็นคนประเภทไหน";
  const index = 6;
  return (
    <MultipleChoice answers={answers} headerText={headerText} index={index} />
  );
};

export default GamePage1;

export const Layout = GameLayout;
