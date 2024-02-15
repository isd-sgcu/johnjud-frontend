import { PetsResponse } from "@/api/pets";
import logo from "@/assets/details/logo.png";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { useMemo, useState } from "react";
import SmallPetCardList from "../../SmallPetCardList";
import Container from "@/components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import EditName from "@/components/Admin/Pets/Add/EditName";
import { Pet } from "@/types/pets";
import PetThumbnails from "../PetThumbnails";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";
import EditText from "@/components/Admin/Pets/Add/EditText";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";

interface DetailsProps {
  isAdmin: boolean;
  data: PetsResponse;
}

const Details = (props : DetailsProps) => {
  const {id} = usePageParams(["id"]);
  const [isFav, setIsFav] = useState(false);
  const pet = useMemo(() => (
    props.data.pets.find((pet) => pet.id === id) as Pet
  ), [props.data]);
  console.log(pet);
  const [name, setName] = useState(pet.name);
  const [text, setText] = useState(pet.caption);
  const [images, setImages] = useState(pet.images);
  const [petInfo, setPetInfo] = useState<info>({
    gender: "ครับ",
    age: "ครับ",
    nature: "ครับ",
    vaccine: true,
    sterile: false,
  });

  const handleSubmit = (showInfo: info) => {
    setPetInfo(showInfo);
  };

  const handleFavPressed = () => {
    setIsFav(!isFav);
  };

  return (
    <>
      <Container className="flex flex-col gap-8">
        {/* header */}
        <div className="flex items-center justify-between text-primary">
          <Icon
            icon="material-symbols-light:arrow-back-ios-new"
            className="h-8 w-8 cursor-pointer"
          />
          <div className="md:hidden">
            <EditName 
              value={name} 
              setValue={setName} 
              isAdmin={props.isAdmin} />
          </div>
        </div>

        {/* thumbnail */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
          <div className="relative w-80">
            {!props.isAdmin ? (
              <PetThumbnails petImages={images} />
            ) : (
              <AddThumbnail
                valueOrigin={petFrom}
                setOrigin={setPetFrom}
                valueThumbnail={image}
                setThumbnail={setImage}
              />
            )}
          </div>

          <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
            <div className="hidden md:block">
              <EditName value={name} setValue={setName} isAdmin={props.isAdmin} />
            </div>
            <EditText value={text} setValue={setText} isAdmin={props.isAdmin} />
          </div>
        </div>
        {props.isAdmin && <AddSmallPicture value={images} setValue={setImages} />}
      </Container>
      
      {/* edit info */}
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={petInfo}
          setValue={setPetInfo}
          onSubmit={handleSubmit}
          isAdmin={props.isAdmin}
          isFav={isFav}
          handleFavPressed={handleFavPressed}
          id={id}
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>

      <SmallPetCardList pets={props.data.pets} />
    </>
  );
};

export default Details;

export const Layout = MainLayout;
