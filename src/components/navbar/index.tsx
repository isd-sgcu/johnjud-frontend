import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoPrimary from "@/assets/Navbar/logoPrimary.svg";
import logoSecondary from "@/assets/Navbar/logoSecondary.svg";
import SideBarWrapper from "./SideBarWrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = useLocation().pathname;
  const [style, setStyle] = useState({
    color: "bg-primary",
    logo: logoPrimary,
  });

  useEffect(() => {
    switch (pathname) {
      case "/admin":
        setStyle({
          color: "bg-accent-red",
          logo: logoPrimary,
        });
        break;
      case "/horo":
        setStyle({
          color: "bg-accent-purple",
          logo: logoSecondary,
        });
        break;
      case "/no-logo":
        setStyle({
          color: "bg-primary",
          logo: "",
        });
        break;
      default:
        setStyle({
          color: "bg-primary",
          logo: logoPrimary,
        });
        break;
    }
  }, [pathname]);

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 transition-all xl:px-8 xl:py-6 ${style.color}`}
    >
      <div className="flex items-center gap-3 ">
        {style.logo && (
          <img
            src={style.logo}
            alt="logo"
            className="h-12 w-12 xl:h-16 xl:w-16"
          />
        )}
        <div className="text-lg font-bold text-white xl:text-2xl">
          JOHNJUD
        </div>
      </div>
      <Icon
        icon="radix-icons:hamburger-menu"
        className="h-8 w-8 cursor-pointer xl:h-12 xl:w-12 text-white"
        onClick={() => setToggle(true)}
      />
      <SideBarWrapper
        setToggle={setToggle}
        color={style.color}
        toggle={toggle}
      />
    </div>
  );
};

export default Navbar;
