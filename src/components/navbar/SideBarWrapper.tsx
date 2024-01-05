import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

interface SideBarWrapperProps {
  color: string;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}

const SideBarWrapper: React.FC<SideBarWrapperProps> = ({
  color,
  setToggle,
  toggle,
}) => {
  const [z, setZ] = useState("-z-10");
  const opacity = toggle ? "opacity-1" : "opacity-0";
  const transitionDuration = 700;
  const delay = 500;

  useEffect(() => {
    if (toggle) {
      setZ("z-10");
    } else {
      setTimeout(() => setZ("-z-10"), transitionDuration - delay);
    }
  }, [toggle]);

  function handleBackgroundClick() {
    setToggle(false);
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 flex ${opacity} ${z} transition duration-${transitionDuration}`}
    >
      <div className="h-full flex-1" onClick={handleBackgroundClick}></div>
      <SideBar color={color} />
    </div>
  );
};

export default SideBarWrapper;
