import { PutPetRequest } from "@/api/pets";
import logo from "@/assets/details/logo.webp";
import dog from "@/assets/dog.webp";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import EditName from "@/components/Admin/Pets/Add/EditName";
import EditText from "@/components/Admin/Pets/Add/EditText";
import Container from "@/components/Container";
import { useDeleteImage } from "@/hooks/mutation/useDeleteImage";
import { useCreateImage } from "@/hooks/mutation/usePostImage";
import { useUpdatePet } from "@/hooks/mutation/useUpdatePet";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useMemo, useState } from "react";
import PetThumbnails from "../PetThumbnails";

interface DetailsProps {
  isAdmin: boolean;
  data: Pet;
}

const Details = (props: DetailsProps) => {
  const postImageMutation = useCreateImage();
  const updatePetMutaion = useUpdatePet();
  const deleteImageMutation = useDeleteImage();

  const { id } = usePageParams(["id"]);
  const [isFav, setIsFav] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [origin, setOrigin] = useState("fromClub");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
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

  const convertImgToFile = async (imgFilePath: string) => {
    const response = await fetch(imgFilePath);
    const blob = await response.blob();
    const file = new File([blob], "image.png", { type: "image/png" });
    return file;
  };

  const imgs = useMemo(() => {
    if (!props.data.images) return [dog];
    return props.data.images?.map((img) => img.url);
  }, [props.data.images]);

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
    setName(props.data.name);
    setText(props.data.caption);
    setOrigin(props.data.origin);
    setPetInfo({
      type: props.data.type as "dog" | "cat" | "-",
      gender: props.data.gender,
      color: props.data.color,
      age: props.data.birthdate,
      nature: props.data.habit,
      vaccine: props.data.is_vaccinated,
      sterile: props.data.is_sterile,
    });
  }, [props.data, id]);

  function convertImgUrltoFile() {
    //check isPending
    if (!props.data.images || !props.isAdmin) return;

    // Set 1st image to thumbnail
    convertImgToFile(props.data.images[0].url).then((file) =>
      setThumbnail(file)
    );

    // Set the rest of the images to images
    const imgFiles = props.data.images.map((img) => img.url).slice(1);
    const imgPromises = imgFiles.map((img) => convertImgToFile(img));
    Promise.all(imgPromises).then((files) => setImages(files));
  }

  function handleFavPressed() {
    setIsFav(!isFav);
  }

  async function handleSubmit() {
    //check is pending
    if (postImageMutation.isPending || updatePetMutaion.isPending) return;

    //clear old images
    props.data.images?.forEach((image) => {
      deleteImageMutation.mutateAsync(image.id);
    });

    //create new images
    const allImageFile: File[] = thumbnail
      ? [thumbnail, ...images]
      : [...images];

    // post image and get id : assume this is correct
    allImageFile.forEach((image) => {
      postImageMutation.mutateAsync({
        file: image,
        pet_id: id,
      });
    });

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
      is_visible: props.data.is_visible,
      origin: origin,
    };

    updatePetMutaion.mutate({
      body: data,
      id: id,
    });
  }

  return (
    <>
      <Container className="flex flex-col gap-8">
        {/* header */}
        <div className="flex items-center justify-between text-primary">
          <button type="button" onClick={() => window.history.back()}>
            <Icon icon="ion:chevron-back" className="h-8 w-8 cursor-pointer" />
          </button>
          <div className="md:hidden">
            <EditName value={name} setValue={setName} isAdmin={props.isAdmin} />
          </div>
        </div>

        {/* thumbnail */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
          <div className="relative w-80">
            {!props.isAdmin ? (
              <PetThumbnails petImages={imgs} origin={origin} />
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
    </>
  );
};

export default Details;

export const Layout = MainLayout;
