import dog from "@/assets/dog.webp";
import Container from "@/components/Container";
import PetThumbnails from "@/components/Pets/PetThumbnails";
import TermsAndConditions from "@/components/Pets/TermsAndConditions";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createContext, useMemo } from "react";

export const PetContext = createContext<Pet | null>(null);

const AdoptionPage = () => {
  const param = usePageParams(["id"]);
  const { data } = usePetQuery(param.id);
  console.log(data);

  const petImagesArray = useMemo(() => {
    if (!data?.images) return [dog];
    return data.images?.map((img) => img.url);
  }, [data?.images]);
  return (
    data && (
      <PetContext.Provider value={data}>
        <Container className="space-y-8">
          <div className="flex items-center justify-between text-primary">
            <button type="button" onClick={() => window.history.back()}>
              <Icon
                icon="ion:chevron-back"
                className="h-8 w-8 cursor-pointer"
              />
            </button>
            <div className="md:hidden">
              <div className="relative flex flex-col">
                <h2 className="flex break-all pl-1 text-right text-3xl font-bold text-primary md:text-left">
                  {data.name}
                </h2>
                <div className="mt-1 h-[3px] w-full rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-16 lg:grid-cols-7">
            <div className="col-span-2 lg:col-span-3 relative">
              <PetThumbnails petImages={petImagesArray} origin={data?.origin} />
            </div>
            <div className="md:col-span-3 lg:col-span-4">
              <div className="flex flex-col items-start gap-8">
                <div className="relative hidden flex-col md:flex">
                  <h2 className="flex break-all pl-1 text-right text-3xl font-bold text-primary md:text-left">
                    {data.name}
                  </h2>
                  <div className="mt-1 h-[3px] w-full rounded-full bg-primary" />
                </div>
                <TermsAndConditions />
              </div>
            </div>
          </div>
        </Container>
      </PetContext.Provider>
    )
  );
};

export default AdoptionPage;

export const Layout = MainLayout;
