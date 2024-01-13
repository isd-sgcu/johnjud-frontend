import Container from "@/components/Container";
import PetThumbnails from "@/components/Pets/PetThumbnails";
import TermsAndConditions from "@/components/Pets/TermsAndConditions";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const AdoptionPage = () => {
  const petName = "ไรลีย์";

  const param = usePageParams(["id"]);

  const petImagesArray = [
    "https://f.ptcdn.info/251/076/000/r6phkmmxuGNF1erTdMG-o.jpg",
    "https://f.ptcdn.info/277/076/000/r6txsu2haubx6Pgn31Mzf-o.jpg",
    "https://f.ptcdn.info/078/076/000/r5tzwel2nq8YmxZm3w6-o.png",
  ];

  return (
    <>
      <div className="flex justify-between px-6 lg:block lg:px-12">
        <Link to={`/pets/${param.id}`}>
          <Icon icon={"ion:chevron-back"} className="h-8 w-8 text-primary" />
        </Link>
        <h2 className="visible flex flex-row justify-between text-4xl font-bold text-primary underline md:hidden">
          {petName}
        </h2>
      </div>

      <Container className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <PetThumbnails petImages={petImagesArray} />
        <div>
          <h2 className="mb-8 hidden text-4xl font-bold text-primary underline md:block">
            {petName}
          </h2>
          <TermsAndConditions />
        </div>
      </Container>
    </>
  );
};

export default AdoptionPage;

export const Layout = MainLayout;
