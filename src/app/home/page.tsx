import JohnjudImage from "@/assets/johnjud-logo-with-text-side.webp";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Banner from "@/components/Main/Banner";
import Filter from "@/components/Main/Filter";
import Heading from "@/components/Pets/Heading";
import Search from "@/components/Search/PetSearch";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import MainLayout from "@/layouts/MainLayout";
import { useNavigate } from "react-router-dom";

import PetList from "@/components/Main/CardList/PetList";
import PetSuggestionList from "@/components/Main/CardList/PetSuggestionList";

// Page
const MainPage = () => {
  const navigate = useNavigate();

  const { data, isLoading } = usePetsQuery();

  return (
    <>
      <Container className="flex flex-col items-center justify-center md:flex-row md:space-x-9">
        <div>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-primary-variant-2 md:w-[30vw]">
            <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center space-y-6 md:items-start">
          <div className="hidden md:flex">
            <Heading onSearch quantity={data?.metadata.total} />
          </div>
          <Search variant="green" />
          <Filter />
        </div>
      </Container>
      <Container className="flex items-center justify-center md:hidden">
        <Divider variant="primary" />
      </Container>
      <Container className="md:hidden">
        <Heading onSearch quantity={data?.metadata.total} />
      </Container>
      <Container className="space-y-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          <div>
            <div className="hidden w-[60vw] md:block lg:w-[30vw]">
              <Banner />
            </div>
          </div>
          <PetSuggestionList
            isLoading={isLoading}
            data={data?.pets.slice(0, 8)}
          />
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <Button
            text="ดูสัตว์เลี้ยงทั้งหมด"
            variant="primary"
            rounded="full"
            className="w-full font-bold md:w-auto"
            onClick={() => navigate("/pets")} // Navigation path
          />
        </div>
      </Container>
      <Container>
        <Divider variant="primary" />
      </Container>
      <Container className="flex md:hidden">
        <Banner />
      </Container>
      <Container className="flex items-center justify-center md:hidden">
        <Divider variant="primary" />
      </Container>
      <Container>
        <PetList isLoading={isLoading} data={data?.pets} />
      </Container>
    </>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
