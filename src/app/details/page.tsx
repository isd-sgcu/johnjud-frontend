import logo from "../../assets/details/logo.svg";
import MainLayout from "../../layouts/MainLayout";
import BigPetCard from "./BigPetCard";
import Info from "./Info";

const Details = () => {
  const isAdmin = true;

  return (
    <div className="pt-4">
      <BigPetCard isAdmin={isAdmin} />
      <div className="my-10 flex gap-20">
        <Info isAdmin={isAdmin} />
        <img src={logo} alt="logo" className="hidden w-[22rem] xl:block" />
      </div>
    </div>
  );
};

export default Details;

export const Layout = MainLayout;
