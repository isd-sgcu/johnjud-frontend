import Container from "../../components/Container";
import PetFilter from "../../components/Filter/PetFilter";
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
        <div>
          <PetFilter />
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
