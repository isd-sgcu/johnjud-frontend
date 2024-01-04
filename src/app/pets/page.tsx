import { useCallback, useState } from "react";
import Container from "../../components/Container";
import Filter from "../../components/Filter";
import { PetIcon } from "../../components/Filter/Icon";
import Heading from "../../components/Pets/Heading";
import PetSearch from "../../components/Search/PetSearch";
import MainLayout from "../../layouts/MainLayout";

const Pets = () => {
  const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);

  const toggleIsOpenFilterPanel = useCallback(() => {
    setIsOpenFilterPanel((prev) => !prev);
  }, []);

  return (
    <>
      <Container>
        <Heading />
      </Container>
      <Container className="flex flex-row gap-x-4">
        <PetSearch />
        <div className="relative">
          <PetIcon
            isOpen={isOpenFilterPanel}
            onClick={toggleIsOpenFilterPanel}
          />
          <Filter isOpen={isOpenFilterPanel} />
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
