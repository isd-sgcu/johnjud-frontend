import Button from "@/components/Button";
import PetCard from "@/components/Card/PetCard";
import Container from "@/components/Container";
import Filter from "@/components/Filter";
import { PetIcon } from "@/components/Filter/Icon";
import Heading from "@/components/Pets/Heading";
import PetSearch from "@/components/Search/PetSearch";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
const Pets = () => {
  const { data } = usePetsQuery();

  const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);

  const toggleIsOpenFilterPanel = useCallback(() => {
    setIsOpenFilterPanel((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex justify-between px-6 lg:block lg:px-12">
        <Link to="/admin/">
          <Icon icon="ion:chevron-back" className="h-8 w-8 text-primary" />
        </Link>
      </div>
      <Container>
        <Heading onSearch />
      </Container>
      <Container className="flex flex-col items-center space-y-6">
        <div className="flex w-full flex-row gap-x-4">
          <PetSearch variant="red" />
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
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-9">
          {data?.pets.map((pet: Pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              image={
                "https://f.ptcdn.info/251/076/000/r6phkmmxuGNF1erTdMG-o.jpg"
              }
              type={pet.type}
              name={pet.name}
              status={pet.status}
              gender={pet.gender}
              birthDate={pet.birthdate}
              habit={pet.habit}
              isSterile={pet.is_sterile}
              isLiked={false}
              isVisibled={pet.is_visible}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export const Layout = MainLayout;
export default Pets;
