import Details from "@/components/Pets/Details/Details";
import MainLayout from "@/layouts/MainLayout";

const PetInfo = () => {
  return (
    <>
      <Details isAdmin={false} />
    </>
  );
};

export const Layout = MainLayout;
export default PetInfo;
