import Details from "@/components/Pets/Details/Details";
import MainLayout from "@/layouts/MainLayout";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
const PetInfo = () => {
  const { data } = usePetsQuery();

  return (
    <>
     { data && <Details isAdmin={false} data = {data} />}
    </>
  );
};

export const Layout = MainLayout;
export default PetInfo;
