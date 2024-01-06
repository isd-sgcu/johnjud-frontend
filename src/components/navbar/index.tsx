import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import hamburgerIcon from "../../assets/navbar/hamburger.svg";
import logoPrimary from "../../assets/navbar/logoPrimary.svg";
import logoSecondary from "../../assets/navbar/logoSecondary.svg";
import SideBarWrapper from "./SideBarWrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = useLocation().pathname;

  let header = "JOHNJUD";
  let color = "bg-primary";
  let logo = logoPrimary;

  useMemo(() => {
    header = "JOHNJUD";
    color = "bg-primary";
    logo = logoPrimary;

    switch (pathname) {
      case "/example":
        header = "JOHNJUD แอดมิน";
        color = "bg-accent-red";
        break;
      case "/fortune":
        color = "bg-accent-purple";
        logo = logoSecondary;
        break;
      case "/main":
        logo = "";
        break;
    }
  }, [pathname]);

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 transition-all xl:px-8 xl:py-6 ${color}`}
    >
      <div className="h-18 flex items-center gap-3 ">
        {logo && (
          <img src={logo} alt="logo" className="h-12 w-12 xl:h-16 xl:w-16" />
        )}
        <div className="cursor-pointer text-lg font-bold text-white xl:text-2xl">
          {header}
        </div>
      </div>
      <img
        src={hamburgerIcon}
        alt="hamburger-icon"
        onClick={() => setToggle(true)}
        className="xl:w-15 h-8 w-8 cursor-pointer"
      />
      <SideBarWrapper setToggle={setToggle} color={color} toggle={toggle} />
    </div>
  );
};

export default Navbar;
