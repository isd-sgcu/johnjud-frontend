import Details from "@/components/Pets/Details/Details";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import AdminLayout from "@/layouts/AdminLayout";
const EditPet = () => {
  const { data } = usePetsQuery();

  return <>{data && <Details isAdmin={true} data={data} />}</>;
};

export default EditPet;

export const Layout = AdminLayout;
