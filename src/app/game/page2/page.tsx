import StoryCard from "@/components/Game/StoryCard";
import GameLayout from "@/layouts/GameLayout";

const GamePage2 = () => {
  const text = "เอาล่ะ เหลือข้อสุดท้ายแล้วสินะ";
  return <StoryCard text={text} />;
};

export default GamePage2;
export const Layout = GameLayout;
