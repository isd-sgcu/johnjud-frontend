import { PetsResponse } from "@/api/pets";
import logo from "@/assets/details/logo.webp";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import BigPetCard from "@/components/Pets/Details/BigPetCard";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { useState } from "react";

const Details = ({ isAdmin, data }: { isAdmin: boolean; data: Pet }) => {
  const [petInfo, setPetInfo] = useState<info>({
    gender: data.gender as "male" | "female",
    type: data.type,
    color: data.color,
    age: data.birthdate,
    nature: data.habit,
    vaccine: true,
    sterile: false,
  });

  const [isFav, setIsFav] = useState(false);

  const handleSubmit = () => {
    console.log(petInfo);
  };

  const handleFavPressed = () => {
    setIsFav(!isFav);
  };

  return (
    <>
      <BigPetCard isAdmin={isAdmin} data={data} />
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={petInfo}
          setValue={setPetInfo}
          onSubmit={handleSubmit}
          isAdmin={isAdmin}
          isFav={isFav}
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
