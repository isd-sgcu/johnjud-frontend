import Container from "@/components/Container";
import PetThumbnails from "@/components/Pets/PetThumbnails";
import TermsAndConditions from "@/components/Pets/TermsAndConditions";
import { usePetQuery } from "@/hooks/queries/usePetQuery";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

const AdoptionPage = () => {
  const param = usePageParams(["id"]);
  const { data } = usePetQuery(param.id);
  const petImagesArray = data?.images.map((img) => img.url) as string[];

  return (
    data && (
      <Container className="space-y-8">
        <div className="flex items-center justify-between text-primary">
          <button type="button" onClick={() => window.history.back()}>
            <Icon icon="ion:chevron-back" className="h-8 w-8 cursor-pointer" />
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

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <PetThumbnails petImages={petImagesArray} origin={data?.origin} />
          <div className="flex flex-col items-start gap-8">
            <div className="relative flex flex-col">
              <h2 className="flex break-all pl-1 text-right text-3xl font-bold text-primary md:text-left">
                {data.name}
              </h2>
              <div className="mt-1 h-[3px] w-full rounded-full bg-primary" />
            </div>
            <TermsAndConditions />
          </div>
        </div>
      </Container>
    )
  );
};

export default AdoptionPage;

export const Layout = MainLayout;
