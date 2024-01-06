import logo from "../../assets/details/logo.png";
import MainLayout from "../../layouts/MainLayout";
import BigPetCard from "./BigPetCard";
import Info from "./Info";

const Details = () => {
  const isAdmin = true;

  return (
    <div className="pt-4">
      <BigPetCard isAdmin={isAdmin} />
      <div className="my-8 flex gap-20 xl:justify-between">
        <Info isAdmin={isAdmin} />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
    </div>
  );
};

export default Details;

export const Layout = MainLayout;
