import { PetsResponse, PutPetRequest } from "@/api/pets";
import logo from "@/assets/details/logo.webp";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import EditName from "@/components/Admin/Pets/Add/EditName";
import EditText from "@/components/Admin/Pets/Add/EditText";
import Container from "@/components/Container";
import { useCreateImage } from "@/hooks/mutation/usePostImage";
import { useUpdatePet } from "@/hooks/mutation/useUpdatePet";
import { useConvertImgUrltoFile } from "@/hooks/useConvertImgUrltoFile";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useMemo, useState } from "react";
import SmallPetCardList from "../../SmallPetCardList";
import PetThumbnails from "../PetThumbnails";

interface DetailsProps {
  isAdmin: boolean;
  data: PetsResponse;
}

const Details = (props: DetailsProps) => {
  const mutaion = useUpdatePet();

  const { id } = usePageParams(["id"]);
  const [isFav, setIsFav] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [origin, setOrigin] = useState("fromClub");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const pet = useMemo(getPet, [props.data, id]);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [petInfo, setPetInfo] = useState<info>({
    type: "-",
    gender: "-",
    color: "-",
    age: "-",
    nature: "-",
    vaccine: false,
    sterile: false,
  });

  useEffect(() => {
    if (
      petInfo.gender === "-" ||
      petInfo.type === "-" ||
      petInfo.color === "-" ||
      petInfo.age === "-" ||
      name === "กรุณาใส่ชื่อ..."
    ) {
      setEnableSubmit(false);
    } else {
      setEnableSubmit(true);
    }
  }, [petInfo.gender, petInfo.type, petInfo.color, petInfo.age, name]);

  useEffect(() => {
    convertImgUrltoFile();
    setName(pet.name);
    setText(pet.caption);
    setOrigin(pet.origin);
    setPetInfo({
      type: pet.type as "dog" | "cat" | "-",
      gender: pet.gender,
      color: pet.color,
      age: pet.birthdate,
      nature: pet.habit,
      vaccine: pet.is_vaccinated,
      sterile: pet.is_sterile,
    });
  }, [props.data, id]);

  function getPet() {
    return props.data.pets.find((pet) => pet.id === id) as Pet;
  }

  function convertImgUrltoFile() {
    if (pet.images === null) return;

    pet.images.forEach(async (image, index) => {
      const response = await useConvertImgUrltoFile(image);
      if (index === 0) {
        setThumbnail(response);
      } else {
        setImages((images) => {
          const newImages = [...images];
          newImages[index - 1] = response as File;
          return newImages;
        });
      }
    });
  }

  function handleFavPressed() {
    setIsFav(!isFav);
  }

  async function handleSubmit() {
    const allImageFile: File[] = await Promise.all(
      thumbnail ? [thumbnail, ...images] : images
    );

    // post image and get id : assume this is correct
    const allImage: string[] = (
      await Promise.all(
        allImageFile.map(async (image) => {
          const imageResponse = await postImageMutation.mutateAsync({
            file: image,
          });
          console.log(imageResponse);
          return imageResponse.id;
        })
      )
    )
      .filter((id) => id !== undefined)
      .map((id) => id ?? ""); // map for ts type checking

    const data: PutPetRequest = {
      type: petInfo.type,
      name: name,
      birthdate: petInfo.age,
      gender: petInfo.gender as "male" | "female",
      color: petInfo.color,
      habit: petInfo.nature,
      caption: text,
      is_sterile: petInfo.sterile,
      is_vaccinated: petInfo.vaccine,
      is_visible: pet.is_visible,
      origin: origin,
      images: allImage,
    };
    console.log(data);
    mutaion.mutate({
      body: data,
      id: id,
    });
  }

  if (mutaion.data !== undefined) console.log(mutaion.data);
  const postImageMutation = useCreateImage();

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
            <EditName value={name} setValue={setName} isAdmin={props.isAdmin} />
          </div>
        </div>

        {/* thumbnail */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
          <div className="relative w-80">
            {!props.isAdmin ? (
              <PetThumbnails petImages={pet.images} />
            ) : (
              <AddThumbnail
                valueOrigin={origin}
                setOrigin={setOrigin}
                valueThumbnail={thumbnail}
                setThumbnail={setThumbnail}
              />
            )}
          </div>

          <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
            <div className="hidden md:block">
              <EditName
                value={name}
                setValue={setName}
                isAdmin={props.isAdmin}
              />
            </div>
            <EditText value={text} setValue={setText} isAdmin={props.isAdmin} />
          </div>
        </div>
        {props.isAdmin && (
          <AddSmallPicture value={images} setValue={setImages} />
        )}
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
          enableSubmit={enableSubmit}
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>

      <SmallPetCardList pets={props.data.pets} />
    </>
  );
};

export default Details;

export const Layout = MainLayout;
