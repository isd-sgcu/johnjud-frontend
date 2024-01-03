import MainLayout from "../../layouts/MainLayout";
import BigPetCard from "./BigPetCard";
import Info from "./Info";
import logo from "../../assets/details/logo.svg";

const Details = () => {
    const isAdmin = true;

    return (  
        <div className="pt-4">
            <BigPetCard isAdmin={isAdmin}/>
            <div className="flex my-10 gap-20">
                <Info isAdmin={isAdmin}/>
                <img src={logo} alt="logo" className="w-[22rem] hidden xl:block"/>
            </div>
        </div>
    );
}
 
export default Details;

export const Layout = MainLayout;