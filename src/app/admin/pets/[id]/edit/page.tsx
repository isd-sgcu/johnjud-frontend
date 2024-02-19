import Details from "@/components/Pets/Details/Details";
import SmallPetCardList from "@/components/SmallPetCardList";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";

const EditPet = () => {
  const { data } = usePetsQuery();
  const param = usePageParams(["id"]);

  const { data: petData } = usePetQuery(param.id);

  return (
    <>
      {petData && <Details isAdmin={true} data={petData} />}
      {data && <SmallPetCardList pets={data.pets} />}
    </>
  );
};

export default EditPet;

export const Layout = AdminLayout;
