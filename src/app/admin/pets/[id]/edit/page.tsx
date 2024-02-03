import Details from "@/components/Pets/Details/Details";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import MainLayout from "@/layouts/MainLayout";

const EditPet = () => {
  const { data } = usePetsQuery();

  return <>{data && <Details isAdmin={true} data={data} />}</>;
};

export const Layout = MainLayout;
export default EditPet;
