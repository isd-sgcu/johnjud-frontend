import JohnjudImage from "@/assets/johnjud-logo-with-text-side.webp";
import PetCard from "@/components/Card/PetCard";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import MainLayout from "@/layouts/MainLayout";
import useFavoriteStore from "@/store/favStore";
import { Pet } from "@/types/pets";
import { useMemo } from "react";

const favourite = () => {
  const { data } = usePetsQuery();
  const { favorites } = useFavoriteStore();

  const favoritePets = useMemo(() => {
    return data?.pets.filter((pet: Pet) => {
      return favorites.includes(pet.id);
    });
  }, [data, favorites]);

  return (
    <>
      <Container className="flex flex-col items-center justify-center">
        <div>
          <img
            src={JohnjudImage}
            alt="Johnjud"
            className="aspect-video w-96 object-cover"
          />
        </div>
      </Container>
      <Divider variant="primary"></Divider>
      <Container className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
          <div className="font-semibold text-primary lg:text-xl">
            สัตว์เลี้ยงที่ถูกใจ
          </div>
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-9">
          {favoritePets?.map((pet: Pet) => (
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
      </Container>
    </>
  );
};

export default favourite;

export const Layout = MainLayout;
