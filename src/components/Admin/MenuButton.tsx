import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface MenuButttonProps {
  link: string;
  icon: string;
  text: string;
}

const MenuButtton = ({ link, icon, text }: MenuButttonProps) => {
  return (
    <Link to={link}>
      <button className="flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-accent-gray-variant bg-opacity-50 shadow">
        <div>
          <Icon icon={icon} className="h-16 w-16" />
        </div>
        <div className="text-xl font-semibold">{text}</div>
      </button>
    </Link>
  );
};

export default MenuButtton;
