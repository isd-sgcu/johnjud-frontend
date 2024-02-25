import logo from "@/assets/details/logo.webp";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import BigPetCard from "@/components/Pets/Details/BigPetCard";
import MainLayout from "@/layouts/MainLayout";
import useFavoriteStore from "@/store/favStore";
import { Pet } from "@/types/pets";
import { useState } from "react";

const Details = ({ isAdmin, data }: { isAdmin: boolean; data: Pet }) => {
  const { favorites } = useFavoriteStore();
  const [petInfo, setPetInfo] = useState<info>({
    gender: data.gender as "male" | "female",
    type: data.type as "dog" | "cat" | "-",
    color: data.color,
    age: data.birthdate,
    nature: data.habit,
    vaccine: true,
    sterile: false,
  });

  const [isFav, setIsFav] = useState(false);
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore(
    (state) => state.removeFromFavorites
  );

  const handleSubmit = () => {
    console.log(petInfo);
  };

  const handleFavPressed = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isFav) {
      removeFromFavorites(data.id);
    } else {
      addToFavorites(data.id);
    }
    setIsFav((prev) => !prev);
  };

  return (
    <>
      <BigPetCard isAdmin={isAdmin} data={data} />
      <div className="mx-auto my-8 flex max-w-[1536px] gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={petInfo}
          setValue={setPetInfo}
          onSubmit={handleSubmit}
          isAdmin={isAdmin}
          isFav={favorites.find((fav) => fav === data.id) ? true : false}
          handleFavPressed={handleFavPressed}
          id={data.id}
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
    </>
  );
};

export default Details;

export const Layout = MainLayout;
