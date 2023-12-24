import React from "react";
import SideBar from "./SideBar";

interface props{
    setToggle : React.Dispatch<React.SetStateAction<boolean>>
}

const SideBarWrapper : React.FC<props> = ({setToggle}) => {
    function handleBackgroundClick(){
        setToggle(false);
    }

    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex">
            <div className="flex-1 h-full" onClick={handleBackgroundClick}></div>
            <SideBar/>
        </div>
    );
}
 
export default SideBarWrapper;