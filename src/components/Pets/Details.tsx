import logo from "@/assets/details/logo.png";
import BigPetCard from "@/components/Details/BigPetCard";
import Info from "@/components/Details/Info";
import MainLayout from "@/layouts/MainLayout";

const Details = ({
    isAdmin
} : {
    isAdmin :boolean
}) => {
  return (
    <>
      <BigPetCard isAdmin={isAdmin} />
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <Info isAdmin={isAdmin} />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
    </>
  );
};

export default Details;

export const Layout = MainLayout;
