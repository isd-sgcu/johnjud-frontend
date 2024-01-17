import Details from "@/components/Pets/Details/Details";
import MainLayout from "@/layouts/MainLayout";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
const EditPet = () => {
  
  const { data } = usePetsQuery();

  return (
    <>
      {data && <Details isAdmin={true} data={data} />}
    </>
  );
};

export const Layout = MainLayout;
export default EditPet;
