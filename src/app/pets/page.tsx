import Container from "../../components/Container";
import PetFilter from "../../components/Filter/PetFilter";
import Heading from "../../components/Pets/Heading";
import PetSearch from "../../components/Search/PetSearch";
import MainLayout from "../../layouts/MainLayout";

const Pets = () => {
  return (
    <div className="space-y-10">
      <Heading />
      <Container className="flex flex-row gap-x-4">
        <PetSearch />
        <div>
          <PetFilter />
        </div>
      </Container>
      <Container>
        <div></div>
      </Container>
    </div>
  );
};

export const Layout = MainLayout;
export default Pets;
