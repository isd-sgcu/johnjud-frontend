import phoneIcon from "../../assets/game/phone-with-text.png";

interface StoryCardProps {
  text: string;
}

const StoryCard = (props: StoryCardProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 md:py-10">
      <div className="flex h-full max-h-[32rem] w-full max-w-3xl flex-grow flex-col items-center justify-center gap-6 rounded-2xl bg-white">
        <img src={phoneIcon} alt="phoneIcon" className="h-24 w-24" />
        <div className="w-full justify-center break-words px-6 text-center text-xl font-bold md:text-2xl">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
