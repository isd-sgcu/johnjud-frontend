import PetPageFallback from "@/components/Fallback/PetPageFallback";
import Details from "@/components/Pets/Details/Details";
import SmallPetCardList from "@/components/SmallPetCardList";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
const PetInfo = () => {
  const { data, isLoading } = usePetsQuery();
  const param = usePageParams(["id"]);

  const { data: petData, isLoading: petDataLoading } = usePetQuery(param.id);

  return (
    <>
      {petDataLoading || !petData ? (
        <PetPageFallback />
      ) : (
        <Details isAdmin={false} data={petData} />
      )}
      <SmallPetCardList isLoading={isLoading} pets={data?.pets} />
    </>
  );
};

export const Layout = MainLayout;
export default PetInfo;
