import { PetsResponse } from "@/api/pets";
import logo from "@/assets/details/logo.png";
import EditInfoAndSubmit from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import BigPetCard from "@/components/Pets/Details/BigPetCard";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { useEffect, useState } from "react";
import SmallPetCardList from "../../SmallPetCardList";

const Details = ({
  isAdmin,
  data,
}: {
  isAdmin: boolean;
  data: PetsResponse;
}) => {
  const param = usePageParams(["id"]);
  const [pet, setPet] = useState<Pet>({
    id: "",
    type: "",
    name: "",
    birthdate: "",
    gender: "male",
    color: "",
    pattern: "",
    habit: "",
    caption: "",
    status: "findHome",
    is_sterile: true,
    is_vaccinated: true,
    is_visible: true,
    is_club_pet: true,
    images: [],
  });

  const changeSpecificField = (tag: string, data: string | boolean) => {
    setPet({
      ...pet,
      [tag]: data,
    });
  };

  useEffect(() => {
    const newPet = data.pets.find((pet) => pet.id === param.id);
    if (newPet) {
      setPet(newPet);
    }
  }, [data, param.id]);

  const [isFav, setIsFav] = useState(false);

  const handleSubmit = (showInfo: Pet) => {
    setPet(showInfo);
  };

  const handleFavPressed = () => {
    setIsFav(!isFav);
  };

  return (
    <>
      <BigPetCard
        isAdmin={isAdmin}
        setPet={setPet}
        pet={pet}
        changeSpecificField={changeSpecificField}
      />
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={pet}
          setValue={setPet}
          onSubmit={handleSubmit}
          isAdmin={isAdmin}
          isFav={isFav}
          handleFavPressed={handleFavPressed}
          id={param.id}
          changeSpecificField={changeSpecificField}
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
      <SmallPetCardList pets={data.pets} />
    </>
  );
};

export default Details;

export const Layout = MainLayout;
