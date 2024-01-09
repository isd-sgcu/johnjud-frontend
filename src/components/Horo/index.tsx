import Divider from "@/components/Divider";
import SelectCard from "@/components/Horo/SelectCard";
import { Icon } from "@iconify/react";
import { useState } from "react";

// main component for Horo Games
const index = () => {
  /*
        - phase 0 = home page
        - phase 1 = select card
        - phase 2 = result
    */
  const [phase, setPhase] = useState<number>(0);

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
      <>
        <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
        </div>
        <h2 className="text-nowrap text-2xl font-bold text-white">
          เลือกไพ่ 1 ใบเพื่อทำนาย
        </h2>
        <SelectCard selectedCard={selectedCard} handleClick={handleClick} />
        <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
        </div>
      </>
    );
  }
  if (phase == 2) {
    return (
      <div>
        <h1>Result</h1>
        {/* <ResultCard/> */}
      </div>
    );
  }
};

export default index;
