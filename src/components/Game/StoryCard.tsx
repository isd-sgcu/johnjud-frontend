import phoneIcon from "../../assets/game/phone-with-text.png";

interface StoryCardProps {
  text: string;
  lastStory?: boolean;
  onClick?: () => void;
}

const StoryCard = ({
  text, 
  lastStory = false, 
  onClick = () => { }
}: StoryCardProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 md:py-10">
      <div className={"flex h-full max-h-[32rem] w-full max-w-3xl flex-grow flex-col items-center justify-center gap-6 rounded-2xl bg-white animate-float-in-bottom " + ((lastStory) ? "cursor-pointer" : "cursor-default")} onClick={onClick}>
        <img src={phoneIcon} alt="phoneIcon" className="h-24 w-24" />
        <div className="flex flex-col items-center">
          <div className="justify-center break-words px-6 text-center text-xl font-bold md:text-2xl whitespace-pre-line">
            {text}
          </div>
          <div className={"text-center text-accent-gray font-bold md:text-xl " + ((lastStory) ? "visible" : "hidden")}>
            “ แตะหน้าจอเพื่อดูผลลัพธ์ ”
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryCard;
