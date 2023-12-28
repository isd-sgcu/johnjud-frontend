import MainLayout from "../../layouts/MainLayout";
import BigPetCard from "./BigPetCard";
import Info from "./Info";

const Details = () => {
    return (  
        <div className="pt-4">
            <BigPetCard/>
            <Info/>
        </div>
    );
}
 
export default Details;

export const Layout = MainLayout;