import PetCard from "@/components/Card/PetCard";
import Container from "@/components/Container";
import PetsPageFallback from "@/components/Fallback/PetsPageFallback";
import Filter from "@/components/Filter";
import { PetIcon } from "@/components/Filter/Icon";
import NoPetFound from "@/components/NoPetFound";
import Heading from "@/components/Pets/Heading";
import PetSearch from "@/components/Search/PetSearch";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import MainLayout from "@/layouts/MainLayout";
import useFavoriteStore from "@/store/favStore";
import { filterState } from "@/types/filter";
import { Pet } from "@/types/pets";
import { useCallback, useState } from "react";

const Pets = () => {
  const [isOpenFilterPanel, setIsOpenFilterPanel] = useState(false);
  const toggleIsOpenFilterPanel = useCallback(() => {
    setIsOpenFilterPanel((prev) => !prev);
  }, []);

  const [filters, setFilters] = useState<filterState>({
    search: "",
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
  const { favorites } = useFavoriteStore();

  return (
    <>
      <Container>
        <Heading onSearch quantity={data?.metadata.total} />
      </Container>
      <Container className="flex flex-row gap-x-4">
        <PetSearch variant="red" filter={filters} setFilters={setFilters} />
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
      </Container>
      <Container>
        {isLoading ? (
          <PetsPageFallback />
        ) : data?.metadata.total || 0 > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-9">
            {data?.pets?.map((pet: Pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                image={pet.images ? pet.images[0]?.url : undefined}
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
        ) : (
          <NoPetFound />
        )}
      </Container>
    </>
  );
};

export const Layout = MainLayout;
export default Pets;
