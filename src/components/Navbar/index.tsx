import logoPrimary from "@/assets/navbar/logoPrimary.svg";
import logoSecondary from "@/assets/navbar/logoSecondary.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = useLocation().pathname;
  const style = useMemo(() => {
    switch (pathname) {
      case "/admin":
        return {
          color: "bg-accent-red",
          logo: logoPrimary,
        };
      case "/horo":
        return {
          color: "bg-accent-purple",
          logo: logoSecondary,
        };
      case "/no-logo":
        return {
          color: "bg-primary",
          logo: "",
        };
      default:
        return {
          color: "bg-primary",
          logo: logoPrimary,
        };
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
        <div className="text-lg font-bold text-white xl:text-2xl">JOHNJUD</div>
      </div>
      <Icon
        icon="radix-icons:hamburger-menu"
        className="h-8 w-8 cursor-pointer text-white xl:h-12 xl:w-12"
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
