import { Icon } from "@iconify/react";
import { useState } from "react";
import Divider from "@/components/Divider";
import SelectCard from "@/components/Horo/SelectCard";
import HoroResult from "@/components/Horo/HoroResult";
import HoroBgContainer from "./HoroBgContainer";

// import all 9 cards from assets/horo/9-card-for-horo
import card1 from "@/assets/horo/9-card-for-horo/1.png";
import card2 from "@/assets/horo/9-card-for-horo/2.png";
import card3 from "@/assets/horo/9-card-for-horo/3.png";
import card4 from "@/assets/horo/9-card-for-horo/4.png";
import card5 from "@/assets/horo/9-card-for-horo/5.png";
import card6 from "@/assets/horo/9-card-for-horo/6.png";
import card7 from "@/assets/horo/9-card-for-horo/7.png";
import card8 from "@/assets/horo/9-card-for-horo/8.png";
import card9 from "@/assets/horo/9-card-for-horo/9.png";


// main component for Horo Games
const index = () => {
  /*
        - phase 0 = home page
        - phase 1 = select card
        - phase 2 = result
    */

  const [phase, setPhase] = useState<number>(0);
    const cardList = [
        card1, card2, card3, card4, card5, card6, card7, card8, card9
    ]
  // selectedCard state
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // handleClick when user choose a card random it
  const handleClick = () => {
    const randomCard = Math.floor(Math.random() * 9);
    setSelectedCard(randomCard);
    setPhase(2);
  };

  // render component based on phase
  if (phase === 0) {
    return (
      <div>
        {/* อันนี้เดี่ยวรอซันทำแล้วเอา component ซันมาใส่ตรงนี้ */}
        <h1 className="text-white">Home Page</h1>
        <button
          onClick={() => setPhase(1)}
          className="rounded-xl bg-red-500 p-5 text-white"
        >
          Start Game
        </button>
      </div>
    );
  }
  if (phase === 1) {
    return (
      <HoroBgContainer>
        <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
        </div>
        <h2 className="text-nowrap text-2xl font-bold text-white">
          เลือกไพ่ 1 ใบเพื่อทำนาย
        </h2>
        <SelectCard selectedCard={selectedCard} handleClick={handleClick} cardList = {cardList}/>
        <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
        </div>
      </HoroBgContainer>
    );
  }
  if (phase == 2) {
    return (
      <>
        <HoroResult
            resultImage = {cardList[selectedCard!]}
            resultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </>
    );
  }
};

export default index;
