import Button from "@/components/Button";
import PetCard from "@/components/Card/PetCard";
import Container from "@/components/Container";
import Filter from "@/components/Filter";
import { PetIcon } from "@/components/Filter/Icon";
import Heading from "@/components/Pets/Heading";
import PetSearch from "@/components/Search/PetSearch";
import { filterState } from "@/types/filter";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import PetsPageFallback from "@/components/Fallback/PetsPageFallback";
import { usePetsAdminQuery } from "@/hooks/queries/usePetsAdminQuery";
import AdminLayout from "@/layouts/AdminLayout";
import useFavoriteStore from "@/store/favStore";

const Pets = () => {
  const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);

  const toggleIsOpenFilterPanel = useCallback(() => {
    setIsOpenFilterPanel((prev) => !prev);
  }, []);

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

  const { data, isLoading } = usePetsAdminQuery(filters);
  const { favorites } = useFavoriteStore();

  return (
    <>
      <Container>
        <Link to="/home">
          <Icon icon="ion:chevron-back" className="h-8 w-8 text-primary" />
        </Link>
      </Container>
      <Container>
        <Heading onSearch quantity={data?.metadata?.total} />
        {/* dont forget to delete ? after metadata, if Boom read this it's mean that Tee forgot LOL*/}
      </Container>
      <Container className="flex flex-col items-center space-y-6">
        <div className="flex w-full flex-row gap-x-4">
          <PetSearch variant="red" />
          <div className="relative">
            <PetIcon
              isOpen={isOpenFilterPanel}
              onClick={toggleIsOpenFilterPanel}
            />
            <Filter
              isOpen={isOpenFilterPanel}
              filters={filters}
              setFilters={setFilters}
            />
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
        {isLoading ? (
          <PetsPageFallback />
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-9">
            {data?.pets?.map((pet: Pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                image={pet.images ? pet.images[0].url : undefined}
                type={pet.type}
                name={pet.name}
                status={pet.status}
                gender={pet.gender}
                birthDate={pet.birthdate}
                habit={pet.habit}
                isSterile={pet.is_sterile}
                isLiked={favorites.find((fav) => fav === pet.id) ? true : false}
                isVisibled={pet.is_visible}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Pets;

export const Layout = AdminLayout;
