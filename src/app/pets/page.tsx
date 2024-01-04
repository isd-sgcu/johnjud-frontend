import Container from "../../components/Container";
import FilterPanel from "../../components/Filter/FilterPanel";
import PetFilterIcon from "../../components/Filter/PetFilterIcon";
import Heading from "../../components/Pets/Heading";
import PetSearch from "../../components/Search/PetSearch";
import MainLayout from "../../layouts/MainLayout";

const Pets = () => {
  return (
    <>
      <Container>
        <Heading />
      </Container>
      <Container className="flex flex-row gap-x-4">
        <PetSearch />
        <div className="relative">
          <PetFilterIcon />
          <FilterPanel />
        </div>
      </Container>
      <Container>
        <div></div>
      </Container>
    </>
  );
};

export const Layout = MainLayout;
export default Pets;
