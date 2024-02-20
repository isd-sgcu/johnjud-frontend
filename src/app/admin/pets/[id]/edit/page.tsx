import Details from "@/components/Pets/Details/Details";
import SmallPetCardList from "@/components/SmallPetCardList";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { usePageParams } from "@/hooks/usePageParams";
import AdminLayout from "@/layouts/AdminLayout";
const EditPet = () => {
  const { data, isLoading } = usePetsQuery();
  const param = usePageParams(["id"]);

  const { data: petData, isLoading: petDataLoading } = usePetQuery(param.id);

  return (
    <>
      {petData && (
        <Details isLoading={petDataLoading} isAdmin={true} data={petData} />
      )}
      {data && <SmallPetCardList isLoading={isLoading} pets={data.pets} />}
    </>
  );
};

export default EditPet;

export const Layout = AdminLayout;
