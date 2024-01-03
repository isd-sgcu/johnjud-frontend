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
        color = "bg-secondary";
        break;
      case "/fortune":
        color = "bg-johnjud-purple";
        logo = logoSecondary;
        break;
      case "/main":
        logo = "";
        break;
    }
  }, [pathname]);

  return (
    <div
      className={`flex items-center justify-between px-8 py-6 transition-all xl:px-6 ${color}`}
    >
      <div className="h-18 flex items-center gap-3 ">
        {logo && <img src={logo} alt="logo" className="h-12 w-12" />}
        <div className="cursor-pointer text-2xl font-bold text-white">
          {header}
        </div>
      </div>
      <img
        src={hamburgerIcon}
        alt="hamburger-icon"
        onClick={() => setToggle(true)}
        className="w-15 h-8 cursor-pointer"
      />
      <SideBarWrapper setToggle={setToggle} color={color} toggle={toggle} />
    </div>
  );
};

export default Navbar;
