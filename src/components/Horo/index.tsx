import Divider from "@/components/Divider";
import HoroResult from "@/components/Horo/HoroResult";
import SelectCard from "@/components/Horo/SelectCard";
import { Icon } from "@iconify/react";
import { useState } from "react";
import HoroBgContainer from "./HoroBgContainer";

import HoroDatas from "@/utils/horo";

// main component for Horo Games
const index = () => {
  /*
        - phase 0 = home page
        - phase 1 = select card
        - phase 2 = result
    */

  const [phase, setPhase] = useState<number>(0);
  
  let cardList = HoroDatas.map((data) => data.img);
  let titleList = HoroDatas.map((data) => data.title);
  let textList = HoroDatas.map((data) => data.content);

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
        <SelectCard
          selectedCard={selectedCard}
          handleClick={handleClick}
          cardList={cardList}
        />
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
          resultImage={cardList[selectedCard!]}
          resultName = {titleList[selectedCard!]}
          resultText={textList[selectedCard!]}
        />
      </>
    );
  }
};

export default index;
