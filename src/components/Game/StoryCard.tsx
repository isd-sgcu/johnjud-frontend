interface StoryCardProps {
  text: string;
  icon: string;
  lastStory?: boolean;
  onClick?: () => void;
}

const baseFunc = () => {};

const StoryCard = ({
  text,
  icon,
  lastStory = false,
  onClick = baseFunc,
}: StoryCardProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-6 md:py-10">
      <div
        className={
          "flex h-full max-h-[32rem] w-full max-w-3xl flex-grow animate-float-in-bottom flex-col items-center justify-center gap-6 rounded-2xl bg-white " +
          (onClick !== baseFunc ? "cursor-pointer" : "cursor-default")
        }
        onClick={onClick}
      >
        <img
          src={icon}
          alt="story icon"
          className={lastStory ? "h-40 w-24" : "h-24 w-24"}
        />
        <div className="flex flex-col items-center">
          <div className="justify-center whitespace-pre-line break-words px-6 text-center text-xl font-bold md:text-2xl">
            {text}
          </div>
          <div
            className={
              "text-center font-bold text-accent-gray md:text-xl " +
              (lastStory ? "visible" : "hidden")
            }
          >
            “ แตะหน้าจอเพื่อดูผลลัพธ์ ”
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
