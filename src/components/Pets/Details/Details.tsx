import { PutPetRequest } from "@/api/pets";
import logo from "@/assets/details/logo.webp";
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
import useFavoriteStore from "@/store/favStore";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import PetThumbnails from "../PetThumbnails";

interface DetailsProps {
  isAdmin: boolean;
  data: Pet;
}

const Details = ({ data, isAdmin }: DetailsProps) => {
  const postImageMutation = useCreateImage();
  const updatePetMutaion = useUpdatePet();
  const deleteImageMutation = useDeleteImage();
  const { favorites } = useFavoriteStore();

  const { id } = usePageParams(["id"]);
  const [isFav, setIsFav] = useState(
    favorites.find((fav) => fav === id) ? true : false
  );

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [origin, setOrigin] = useState("fromClub");
  const [petInfo, setPetInfo] = useState<info>({
    type: data.type as "dog" | "cat" | "-",
    gender: data.gender,
    color: data.color,
    age: dayjs(data.birthdate).toISOString(),
    nature: data.habit,
    vaccine: data.is_vaccinated,
    sterile: data.is_sterile,
    owner: data.owner,
    tel: data.tel,
    contact: data.contact,
  });

  const enableSubmit = useMemo(() => {
    return !(
      petInfo.gender === "-" ||
      petInfo.type === "-" ||
      petInfo.color === "-" ||
      petInfo.age === "-" ||
      name === "กรุณาใส่ชื่อ..."
    );
  }, [petInfo.gender, petInfo.type, petInfo.color, petInfo.age, name]);

  useEffect(() => {
    setName(data.name);
    setText(data.caption);
    setOrigin(data.origin);
    setPetInfo({
      type: data.type as "dog" | "cat" | "-",
      gender: data.gender,
      color: data.color,
      age: dayjs(data.birthdate).toISOString(),
      nature: data.habit,
      vaccine: data.is_vaccinated,
      sterile: data.is_sterile,
      owner: data.owner,
      tel: data.tel,
      contact: data.contact,
    });
  }, [data, id]);

  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore(
    (state) => state.removeFromFavorites
  );

  function handleFavPressed() {
    if (isFav) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
    setIsFav((prev) => !prev);
  }

  const handleSubmit = async () => {
    const newData: PutPetRequest = {
      type: petInfo.type,
      name: name,
      birthdate: petInfo.age,
      gender: petInfo.gender as "male" | "female",
      color: petInfo.color,
      habit: petInfo.nature,
      caption: text,
      is_sterile: petInfo.sterile,
      is_vaccinated: petInfo.vaccine,
      is_visible: data.is_visible,
      origin: origin,
      tel: petInfo.tel,
      contact: petInfo.contact,
      owner: petInfo.owner,
    };

    toast.promise(
      updatePetMutaion.mutateAsync({
        body: newData,
        id: id,
      }),
      {
        loading: "กำลังบันทึกข้อมูล...",
        success: "บันทึกข้อมูลสำเร็จ",
        error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      }
    );
  };

  const {
    thumbnail,
    onChangeSmallImages,
    onDeleteSmallImage,
    onchangeThumbnail,
    smallImages,
  } = useMemo(() => {
    return {
      thumbnail: data.images?.[0].url,
      onchangeThumbnail: (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const newImage = files[0];
        toast.promise(
          postImageMutation.mutateAsync({
            file: newImage,
            pet_id: id,
          }),
          {
            loading: "กำลังอัพโหลดรูปภาพ...",
            success: "อัพโหลดรูปภาพสำเร็จ",
            error: "เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ",
          }
        );

        if (data.images?.[0].id) {
          deleteImageMutation.mutate(data.images?.[0].id);
        }
      },

      smallImages: data.images?.slice(1).map((img) => img.url) || [],
      onChangeSmallImages: (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
          const newImage = files[0];
          toast.promise(
            postImageMutation.mutateAsync({
              file: newImage,
              pet_id: id,
            }),
            {
              loading: "กำลังอัพโหลดรูปภาพ...",
              success: "อัพโหลดรูปภาพสำเร็จ",
              error: "เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ",
            }
          );
        }
      },
      onDeleteSmallImage: (index: number) => {
        const imageId = data.images?.[index + 1].id;
        if (imageId) {
          toast.promise(deleteImageMutation.mutateAsync(imageId), {
            loading: "กำลังลบรูปภาพ...",
            success: "ลบรูปภาพสำเร็จ",
            error: "เกิดข้อผิดพลาดในการลบรูปภาพ",
          });
        }
      },
    };
  }, [data, id]);

  return (
    <>
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
        <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-16 lg:grid-cols-7">
          <div className="col-span-2">
            <div className="relative aspect-square w-full">
              {!isAdmin ? (
                <PetThumbnails
                  petImages={data.images.map((img) => img.url)}
                  origin={origin}
                />
              ) : (
                <AddThumbnail
                  origin={origin}
                  setOrigin={setOrigin}
                  thumbnail={thumbnail}
                  onChangeThumbnail={onchangeThumbnail}
                />
              )}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-5">
            <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
              <div className="hidden md:block">
                <EditName value={name} setValue={setName} isAdmin={isAdmin} />
              </div>
              <EditText value={text} setValue={setText} isAdmin={isAdmin} />
            </div>
          </div>
        </div>
        {isAdmin && (
          <AddSmallPicture
            images={smallImages}
            onChange={onChangeSmallImages}
            onDelete={onDeleteSmallImage}
          />
        )}
      </Container>

      {/* edit info */}
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={petInfo}
          setValue={setPetInfo}
          onSubmit={handleSubmit}
          isAdmin={isAdmin}
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
