import HoroResult from "@/components/Horo/HoroResult";
import SelectCard from "@/components/Horo/SelectCard";
import HoroDatas from "@/utils/horo";
import { useCallback, useMemo, useState } from "react";
import HoroBgContainer from "@/components/Horo/HoroBgContainer";

const HoroGame = () => {
  const [phase, setPhase] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const shuffledCards = useMemo(() => {
    let shuffled = [...HoroDatas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9); 
  }, []);
  const cardList = useMemo(() => shuffledCards.map((data) => data.img), []);
  const titleList = useMemo(() => shuffledCards.map((data) => data.title), []);
  const textList = useMemo(() => shuffledCards.map((data) => data.content), []);

  const handleClick = useCallback(() => {
    const randomCard: number = Math.floor(Math.random() * cardList.length);
    setSelectedCard(randomCard);
    setPhase(2);
  }, [cardList.length]);

  const renderPhase = () => {
    switch (phase) {
      case 0:
        // เดี่ยวรอ component Sun มาแล้วค่อยใส่
        return (
          <div>
            <h1 className="text-white">Home Page</h1>
            <button
              onClick={() => setPhase(1)}
              className="rounded-xl bg-red-500 p-5 text-white"
            >
              Start Game
            </button>
          </div>
        );
      case 1:
        return (
          <HoroBgContainer>
            <SelectCard
              selectedCard={selectedCard}
              handleClick={handleClick}
              cardList={cardList}
            />
          </HoroBgContainer>
        );
      case 2:
        return (
          selectedCard !== null && (
            <HoroResult
              resultImage={cardList[selectedCard]}
              resultName={titleList[selectedCard]}
              resultText={textList[selectedCard]}
            />
          )
        );
      default:
        return null;
    }
  };

  return <>{renderPhase()}</>;
};

export default HoroGame;
