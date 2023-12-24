import React from "react";
import SideBar from "./SideBar";
import Page from "./Page";

interface props{
    page : Page,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
}

const SideBarWrapper : React.FC<props> = ({page, setToggle}) => {
    function handleBackgroundClick(){
        setToggle(false);
    }

    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex">
            <div className="flex-1 h-full" onClick={handleBackgroundClick}></div>
            <SideBar page={page} />
        </div>
    );
}
 
export default SideBarWrapper;