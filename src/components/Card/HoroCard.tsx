import React from "react";

interface HoroCardProps {
  onClick?: () => void;
  image: string;
}

const HoroCard: React.FC<HoroCardProps> = ({ onClick, image }) => {
  return (
    <div
      className="shrink-0 cursor-pointer rounded-[10px] shadow-purple-500 transition-all duration-100 hover:scale-110"
      onClick={onClick}
    >
      <img src={image} alt="HoroCard" className="w-20 rounded-[10px]" />
    </div>
  );
};

export default HoroCard;
