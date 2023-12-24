import logo from "/src/assets/navbar/logo.svg";
import hamburgerIcon from "/src/assets/navbar/hamburger.svg";
import { useState } from "react";
import SideBarWrapper from "./SideBarWrapper";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
  <div className="flex items-center bg-primary justify-between py-3 px-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-12 h-12"/>
        <div className="font-poppins font-bold text-white">JOHNJUD</div>
      </div>
      <img src={hamburgerIcon} alt="hamburger-icon" onClick={() => setToggle(true)}/>
      { toggle && <SideBarWrapper setToggle={setToggle}/>}
  </div>
  );
};

export default Navbar;
