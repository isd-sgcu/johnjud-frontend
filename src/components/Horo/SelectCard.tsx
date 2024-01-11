import HoroCardBack from "@/assets/horo/card-cover.png";
import HoroCard from "@/components/Card/HoroCard";
import { Icon } from "@iconify/react";
import Divider from "@/components/Divider";

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
    <>
     <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
      </div>
    <h2 className="text-white text-2xl font-bold">เลือกไพ่ 1 ใบเพื่อทำนาย</h2>
    <div className="grid grid-cols-3 gap-3">
      {cardList.map((cardImage: string, index: number) => (
        <HoroCard
          key={index}
          image={selectedCard === index ? cardImage : HoroCardBack}
          onClick={handleClick}
        />
      ))}
    </div>
    <div className="flex items-center justify-center space-x-3 md:hidden">
          <Icon icon="custom:md:line" />
          <Divider variant="accent-yellow" />
          <Icon icon="custom:md:line" />
      </div>
    </>
  );
};

export default SelectCard;
