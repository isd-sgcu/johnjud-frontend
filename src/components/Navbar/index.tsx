import usePathStyle from "@/hooks/usePathStyle";
import { useEffect, useState } from "react";
import DarkBackground from "./DarkBackground";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(toggle);
  }, [toggle]);
  const style = usePathStyle();

  return (
    <>
      <DarkBackground isExist={toggle} isShow={isShow} setToggle={setToggle} />
      <TopBar style={style} setToggle={setToggle} />
      <SideBar color={style.color} isShow={isShow} isExist={toggle} />
    </>
  );
};

export default Navbar;
