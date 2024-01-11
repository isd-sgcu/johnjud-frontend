import phoneIcon from "../../assets/game/phone-with-text.png";

interface StoryCardProps {
  text: string;
}

const StoryCard = (props: StoryCardProps) => {
  return (
    <div className="flex w-full flex-col items-center bg-primary-variant px-6 py-6 lg:py-10">
      <div className="flex h-screen max-h-[32rem] w-full max-w-3xl flex-grow flex-col items-center justify-center gap-6 rounded-2xl bg-white">
        <img src={phoneIcon} alt="phoneIcon" className="h-24 w-24" />
        <div className="w-full justify-center break-words px-6 text-center text-xl font-bold">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
