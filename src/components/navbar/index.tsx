import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import hamburgerIcon from "../../assets/navbar/hamburger.svg";
import logoPrimary from "../../assets/navbar/logoPrimary.svg";
import logoSecondary from "../../assets/navbar/logoSecondary.svg";
import SideBarWrapper from "./SideBarWrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = useLocation().pathname;
  const [style, setStyle] = useState({
    color : "bg-primary",
    logo : logoPrimary
  })

  useMemo(() => {
    switch (pathname) {
      case "/admin":
        setStyle({
          color : "bg-accent-red",
          logo : logoPrimary
        });
        break;
      case "/horo":
        setStyle({
          color : "bg-accent-purple",
          logo : logoSecondary
        });
        break;
      case "/no-logo":
        setStyle({
          color: "bg-primary",
          logo : ""
        });
        break;
      default :
        setStyle({
          color: "bg-primary",
          logo : logoPrimary
        });
        break;
    }
  }, [pathname]);

  return (
    <div className={`flex items-center justify-between px-4 py-3 transition-all xl:px-8 xl:py-6 ${style.color}`}>
      <div className="h-18 flex items-center gap-3 ">
        {style.logo && (
          <img src={style.logo} alt="logo" className="h-12 w-12 xl:h-16 xl:w-16" />
        )}
        <div className="cursor-pointer text-lg font-bold text-white xl:text-2xl">
          JOHNJUD
        </div>
      </div>
      <img
        src={hamburgerIcon}
        alt="hamburger-icon"
        onClick={() => setToggle(true)}
        className="xl:w-15 h-8 w-8 cursor-pointer"
      />
      <SideBarWrapper setToggle={setToggle} color={style.color} toggle={toggle} />
    </div>
  );
};

export default Navbar;
