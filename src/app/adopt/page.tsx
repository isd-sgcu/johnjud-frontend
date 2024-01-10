import Container from "@/components/Container";
import PetThumbnails from "@/components/PetThumbnails";
import TermsAndConditions from "@/components/TermsAndConditions";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface AdoptionPageProps {
  petName: string;
}

const AdoptionPage = ({ petName = "ไรลีย์" }: AdoptionPageProps) => {
  return (
    <div>
      <Container className="flex flex-row items-center justify-between text-primary">
        <Link to="/pets">
          <Icon icon={"ion:chevron-back"} className="h-8 w-8" />
        </Link>
        <div className="visible flex flex-row justify-between text-4xl font-bold underline  md:hidden">
          {petName}
        </div>
      </Container>
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <PetThumbnails petLink="https://f.ptcdn.info/251/076/000/r6phkmmxuGNF1erTdMG-o.jpg" />
        <div>
          <p className="mb-8 hidden text-4xl font-bold text-primary underline md:block">
            {petName}
          </p>
          <TermsAndConditions />
        </div>
      </Container>
    </div>
  );
};

export default AdoptionPage;

export const Layout = MainLayout;
