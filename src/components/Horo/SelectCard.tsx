import HoroCardBack from "@/assets/horo/card-cover.png";
import HoroCard from "@/components/Card/HoroCard";

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

interface SelectCardProps {
  selectedCard: number | null;
  handleClick: () => void;
}

const SelectCard: React.FC<SelectCardProps> = ({
  selectedCard,
  handleClick,
}) => {
  // an array of image path
  const cardList = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {cardList.map((cardImage: string, index: number) => (
        <HoroCard
          key={index}
          image={selectedCard === index ? cardImage : HoroCardBack}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default SelectCard;
