import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  const transitionDuration = 700;
  const delay = 500;
  const opacity = useMemo(() => {
    return toggle ? "opacity-1" : "opacity-0";
  }, [toggle]);

  useEffect(() => {
    if (toggle) {
      setZ("z-10");
    } else {
      setTimeout(() => setZ("-z-10"), transitionDuration - delay);
    }
  }, [toggle]);

  const handleBackgroundClick = useCallback(() => {
    setToggle(false);
  }, [setToggle]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 flex ${opacity} ${z} transition duration-${transitionDuration}`}
    >
      <div
        className="flex h-full flex-1 flex-col"
        onClick={handleBackgroundClick}
      >
        <div className="h-[72px] w-full"></div>
        <div className="w-full flex-1 bg-black opacity-50"></div>
      </div>
      <SideBar color={color} />
    </div>
  );
};

export default SideBarWrapper;
