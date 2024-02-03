import petImg from "@/assets/details/pet.svg";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";
import EditName from "@/components/Admin/Pets/Add/EditName";
import EditText from "@/components/Admin/Pets/Add/EditText";
import Container from "@/components/Container";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PetThumbnails from "../PetThumbnails";

interface BigPetCardProps {
  isAdmin: boolean;
  pet: Pet;
  setPet: React.Dispatch<React.SetStateAction<Pet>>;
  changeSpecificField: (tag: string, data: string | boolean) => void;
}

const BigPetCard = (props: BigPetCardProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const imgs = [petImg, petImg, petImg, petImg];

  const convertImgToFile = async (imgFilePath: string) => {
    const response = await fetch(imgFilePath);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    setImages(() => [file, file, file]);
    setImage(file);
  };

  useEffect(() => {
    convertImgToFile(petImg);
  }, []);

  return (
    <Container className="flex flex-col gap-8">
      {/* header */}
      <div className="flex items-center justify-between text-primary">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          className="h-8 w-8 cursor-pointer"
        />
        <div className="md:hidden">
          <EditName
            value={props.pet.name}
            changeSpecificField={props.changeSpecificField}
            isAdmin={props.isAdmin}
          />
        </div>
      </div>

      {/* thumbnail */}
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
        <div className="relative w-80">
          {!props.isAdmin ? (
            <PetThumbnails petImages={imgs} />
          ) : (
            <AddThumbnail
              valueOrigin={props.pet.is_club_pet}
              changeSpecificField={props.changeSpecificField}
              valueThumbnail={image}
              setThumbnail={setImage}
            />
          )}
        </div>

        <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
          <div className="hidden md:block">
            <EditName
              value={props.pet.name}
              changeSpecificField={props.changeSpecificField}
              isAdmin={props.isAdmin}
            />
          </div>
          <EditText
            value={props.pet.caption}
            setValue={(data) => props.changeSpecificField("caption", data)}
            isAdmin={props.isAdmin}
          />
        </div>
      </div>
      {props.isAdmin && <AddSmallPicture value={images} setValue={setImages} />}
    </Container>
  );
};

export default BigPetCard;
