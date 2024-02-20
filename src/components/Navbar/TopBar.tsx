import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

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
      className={`sticky top-0 z-[1002] flex items-center justify-between px-6 py-3 transition-all ${style.color}`}
    >
      <Link to="/home" className="flex items-center gap-3 ">
        {style.logo && (
          <img src={style.logo} alt="logo" className="h-12 w-12 rounded-full" />
        )}
        <div className="text-lg font-bold text-white">JOHNJUD</div>
      </Link>
      <button
        id="open-sidebar"
        type="button"
        className="outline-none"
        onClick={() => setToggle(true)}
      >
        <Icon
          icon="radix-icons:hamburger-menu"
          className="h-8 w-8 cursor-pointer text-white"
        />
      </button>
    </div>
  );
};

export default TopBar;
