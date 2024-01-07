import { Icon } from "@iconify/react/dist/iconify.js";

const TopBar = ({
  style,
  setToggle,
}: {
  style: {
    color: string;
    logo: string;
  };
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`sticky top-0 z-[1002] flex items-center justify-between px-4  py-3 transition-all ${style.color}`}
    >
      <div className="flex items-center gap-3 ">
        {style.logo && (
          <img src={style.logo} alt="logo" className="h-12 w-12" />
        )}
        <div className="-xl:text-2xl text-lg font-bold text-white">JOHNJUD</div>
      </div>
      <Icon
        icon="radix-icons:hamburger-menu"
        className="h-8 w-8 cursor-pointer text-white"
        onClick={() => setToggle(true)}
      />
    </div>
  );
};

export default TopBar;
