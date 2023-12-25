import logoPrimary from "/src/assets/navbar/logoPrimary.svg";
import logoSecondary from "/src/assets/navbar/logoSecondary.svg";
import hamburgerIcon from "/src/assets/navbar/hamburger.svg";
import { useState } from "react";
import SideBarWrapper from "./SideBarWrapper";
import Page from "./Page";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let page : Page = Page.MAIN;
  
  let header = "JOHNJUD";
  let color = "bg-primary";
  let logo = logoPrimary;

  switch(page){
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
  <div className={`flex items-center justify-between py-3 px-4 ${color}`}>
      <div className="flex items-center gap-3">
        {logo && <img src={logo} alt="logo" className="w-12 h-12"/>}
        <div className="font-poppins font-bold text-white cursor-pointer">{header}</div>
      </div>
      <img src={hamburgerIcon} alt="hamburger-icon" onClick={() => setToggle(true)} className="cursor-pointer" />
      { toggle && <SideBarWrapper setToggle={setToggle} page={page} />}
  </div>
  );
};

export default Navbar;
