import JohnjudImage from "@/assets/johnjud-logo-with-text-side.webp";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Banner from "@/components/Main/Banner";
import PetList from "@/components/Main/CardList/PetList";
import PetSuggestionList from "@/components/Main/CardList/PetSuggestionList";
import Filter from "@/components/Main/Filter";
import Heading from "@/components/Pets/Heading";
import Search from "@/components/Search/PetSearch";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import MainLayout from "@/layouts/MainLayout";
import { filterState } from "@/types/filter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Page
const MainPage = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<filterState>({
    dog: false,
    cat: false,
    male: false,
    female: false,
    white: false,
    black: false,
    brown: false,
    blonde: false,
    minAge: 0,
    maxAge: 30,
  });

  const { data, isLoading } = usePetsQuery(filters);

  return (
    <>
      <Container className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-9 lg:grid-cols-3">
        <div>
          <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-primary-variant-2">
            <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center space-y-6 md:items-start lg:col-span-2">
          <div className="hidden md:flex">
            <Heading onSearch quantity={data?.metadata.total} />
          </div>
          <Search variant="green" />
          <Filter filters={filters} setFilters={setFilters} />
        </div>
      </Container>
      <Container className="flex items-center justify-center md:hidden">
        <Divider variant="primary" />
      </Container>
      <Container className="md:hidden">
        <Heading onSearch quantity={data?.metadata.total} />
      </Container>
      <Container className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <div className="hidden w-1/2 md:block lg:w-full">
              <Banner />
            </div>
          </div>
          <div className="col-span-2">
            <PetSuggestionList
              isLoading={isLoading}
              data={data?.pets?.slice(0, 8)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end lg:pr-12">
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
