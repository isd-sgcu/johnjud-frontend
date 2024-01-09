import HoroCardBack from "@/assets/horo/card-cover.png";

const HoroCard = () => {
    return (
      <div className="cursor-pointer shadow-purple-500 hover:shadow-2xl transition-all duration-500 hover:scale-110 rounded-[10px] shrink-0">
          <img src={HoroCardBack} alt="HoroCard" className="w-20 rounded-[10px]" />
      </div>
    )
}
  
export default HoroCard;
  