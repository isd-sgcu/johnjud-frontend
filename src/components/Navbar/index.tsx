import logoPrimary from "@/assets/navbar/logoPrimary.svg";
import logoSecondary from "@/assets/navbar/logoSecondary.svg";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import DarkBackground from "./DarkBackground";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    setIsShow(toggle);
  }, [toggle]);

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
    <>
      <DarkBackground isExist={toggle} isShow={isShow} setToggle={setToggle} />
      <TopBar style={style} setToggle={setToggle} />
      <SideBar color={style.color} isShow={isShow} isExist={toggle} />
    </>
  );
};

export default Navbar;
