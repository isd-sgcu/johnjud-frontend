import Button from "@/components/Button";
import Container from "@/components/Container";
import Filter from "@/components/Filter";
import { PetIcon } from "@/components/Filter/Icon";
import Heading from "@/components/Pets/Heading";
import PetSearch from "@/components/Search/PetSearch";
import MainLayout from "@/layouts/MainLayout";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Pets = () => {
  const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);

  const toggleIsOpenFilterPanel = useCallback(() => {
    setIsOpenFilterPanel((prev) => !prev);
  }, []);

  return (
    <>
      <Container>
        <Heading onSearch />
      </Container>
      <Container className="flex flex-col items-center space-y-6">
        <div className="flex w-full flex-row gap-x-4">
          <PetSearch />
          <div className="relative">
            <PetIcon
              isOpen={isOpenFilterPanel}
              onClick={toggleIsOpenFilterPanel}
            />
            <Filter isOpen={isOpenFilterPanel} />
          </div>
        </div>
        <div className="w-full xl:w-auto">
          <Link to="/admin/pets/add">
            <Button
              icon="ph:plus"
              text="สร้างโพสต์ใหม่"
              variant="accent-red"
              rounded="full"
              className="w-full xl:w-auto xl:px-24"
            />
          </Link>
        </div>
      </Container>
      <Container>
        <div>{/* Pet Card */}</div>
      </Container>
    </>
  );
};

export const Layout = MainLayout;
export default Pets;
