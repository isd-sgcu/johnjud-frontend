import SideBar from "./SideBar";

const SideBarWrapper = () => {
    return (  
        <div className="fixed top-0 bottom-0 left-0 right-0 flex">
            <div className="flex-1 h-full" ></div>
            <SideBar/>
        </div>
    );
}
 
export default SideBarWrapper;