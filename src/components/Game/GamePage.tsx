import Button from "@/components/Button";
import catImage from "../../assets/user-tarot/catImage.svg";

interface GamePageProps {
  onClick: () => void;
}
const GamePage = (props: GamePageProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center p-6 lg:mx-auto lg:w-80 lg:px-0 lg:py-10">
        <img className="w-80 rounded-2xl" src={catImage} />
        <div className="my-6 flex flex-col items-center lg:my-8">
          <div
            className="py-3 text-5xl font-bold text-primary
                    lg:py-2 lg:text-4xl"
          >
            เกมทายนิสัย
          </div>
          <div
            className="text-base font-bold text-white
                    lg:py-1 lg:text-xl"
          >
            มาหาสัตว์เลี้ยงที่เหมาะกับคุณกัน!
          </div>
        </div>
        <Button
          text="เล่นเลย"
          variant="accent-red"
          rounded="2xl"
          className="w-full text-xl font-semibold"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default GamePage;
