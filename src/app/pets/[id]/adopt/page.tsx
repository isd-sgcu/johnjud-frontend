import dog from "@/assets/dog.webp";
import Container from "@/components/Container";
import PetThumbnails from "@/components/Pets/PetThumbnails";
import TermsAndConditions from "@/components/Pets/TermsAndConditions";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo } from "react";

const AdoptionPage = () => {
  const param = usePageParams(["id"]);
  const { data } = usePetQuery(param.id);

  const petImagesArray = useMemo(() => {
    if (!data?.images) return [dog];
    return data.images?.map((img) => img.url);
  }, [data?.images]);
  return (
    data && (
      <>
        <button type="button" onClick={() => window.history.back()}>
          <Icon icon="ion:chevron-back" className="h-8 w-8 cursor-pointer" />
        </button>
        <h2 className="visible flex flex-row justify-between text-4xl font-bold text-primary underline md:hidden">
          {data.name}
        </h2>

        <Container className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <PetThumbnails petImages={petImagesArray} origin={data?.origin} />
          <div>
            <h2 className="mb-8 hidden text-4xl font-bold text-primary underline md:block">
              {data.name}
            </h2>
            <TermsAndConditions />
          </div>
        </Container>
      </>
    )
  );
};

export default AdoptionPage;

export const Layout = MainLayout;
