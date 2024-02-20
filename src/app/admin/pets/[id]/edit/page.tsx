import PetPageFallback from "@/components/Fallback/PetPageFallback";
import Details from "@/components/Pets/Details/Details";
import SmallPetCardList from "@/components/SmallPetCardList";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";

const EditPet = () => {
  const { data, isLoading } = usePetsQuery();
  const param = usePageParams(["id"]);

  const { data: petData, isLoading: petDataLoading } = usePetQuery(param.id);

  return (
    <>
      {petDataLoading || !petData ? (
        <PetPageFallback />
      ) : (
        <Details isAdmin={true} data={petData} />
      )}
      <SmallPetCardList isLoading={isLoading} pets={data?.pets} />
    </>
  );
};

export default EditPet;

export const Layout = AdminLayout;
