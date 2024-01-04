import { useState } from "react";
import hamburgerIcon from "../../assets/navbar/hamburger.svg";
import logoPrimary from "../../assets/navbar/logoPrimary.svg";
import logoSecondary from "../../assets/navbar/logoSecondary.svg";
import Page from "./Page";
import SideBarWrapper from "./SideBarWrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const page: Page = Page.MAIN;

  let header = "JOHNJUD";
  let color = "bg-primary";
  let logo = logoPrimary;

  switch (page) {
    case Page.ADMIN:
      header = "JOHNJUD แอดมิน";
      color = "bg-secondary";
      break;
    case Page.FORTUNE:
      color = "bg-johnjud-purple";
      logo = logoSecondary;
      break;
    case Page.MAIN:
      logo = "";
      break;
  }

  return (
    <div className={`flex items-center justify-between px-8 py-6 ${color}`}>
      <div className="flex items-center gap-3">
        {logo && <img src={logo} alt="logo" className="h-12 w-12" />}
        <div className="cursor-pointer font-poppins font-bold text-white">
          {header}
        </div>
      </div>
      <img
        src={hamburgerIcon}
        alt="hamburger-icon"
        onClick={() => setToggle(true)}
        className="w-6 cursor-pointer"
      />
      {toggle && <SideBarWrapper setToggle={setToggle} page={page} />}
    </div>
  );
};

export default Navbar;
