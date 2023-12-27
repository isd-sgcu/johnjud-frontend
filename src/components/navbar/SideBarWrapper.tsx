import React from "react";
import Page from "../../types/Page";
import SideBar from "./SideBar";

interface SideBarWrapperProps {
  page: Page;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ page, setToggle }) => {
  function handleBackgroundClick() {
    setToggle(false);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex">
      <div className="h-full flex-1" onClick={handleBackgroundClick}></div>
      <SideBar page={page} />
    </div>
  );
};

export default SideBarWrapper;
