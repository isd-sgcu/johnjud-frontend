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

const BigPetCard = ({ isAdmin, data }: { isAdmin: boolean; data: Pet }) => {
  const [name, setName] = useState(data.name);
  const [text, setText] = useState(data.caption);
  const [petFrom, setPetFrom] = useState(data.origin);
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const imgs = data.images.map((img) => img.url);

  const convertImgToFile = async (imgFilePath: string) => {
    const response = await fetch(imgFilePath);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    setImages((images) => [...images, file]);
    setImage(file);
  };

  useEffect(() => {
    data.images.map((img) => convertImgToFile(img.url));
  }, []);

  return (
    <Container className="flex flex-col gap-8">
      {/* header */}
      <div className="flex items-center justify-between text-primary">
        <button type="button" onClick={() => window.history.back()}>
          <Icon icon="ion:chevron-back" className="h-8 w-8 cursor-pointer" />
        </button>
        <div className="md:hidden">
          <EditName value={name} setValue={setName} isAdmin={isAdmin} />
        </div>
      </div>

      {/* thumbnail */}
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
        <div className="relative w-80">
          {!isAdmin ? (
            <PetThumbnails petImages={imgs} origin={data.origin} />
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
            <EditName value={name} setValue={setName} isAdmin={isAdmin} />
          </div>
          <EditText value={text} setValue={setText} isAdmin={isAdmin} />
        </div>
      </div>
      {isAdmin && <AddSmallPicture value={images} setValue={setImages} />}
    </Container>
  );
};

export default BigPetCard;
