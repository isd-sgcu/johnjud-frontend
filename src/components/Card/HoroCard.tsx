import HoroCardBack from "@/assets/horo/card-cover.png";

const HoroCard = () => {
  return (
    <div className="shrink-0 cursor-pointer rounded-[10px] shadow-purple-500 transition-all duration-100 hover:scale-110">
      <img src={HoroCardBack} alt="HoroCard" className="w-20 rounded-[10px]" />
    </div>
  );
};

export default HoroCard;
