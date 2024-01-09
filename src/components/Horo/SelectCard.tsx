import HoroCardBack from "@/assets/horo/card-cover.png";
import HoroCard from "@/components/Card/HoroCard";

interface SelectCardProps {
  selectedCard: number | null;
  cardList: string[];
  handleClick: () => void;
}

const SelectCard = ({
  selectedCard,
  handleClick,
  cardList,
}: SelectCardProps) => {
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
