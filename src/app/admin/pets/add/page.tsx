import { postPetRequest } from "@/api/pets";
import logo from "@/assets/details/logo.webp";
import Container from "@/components/Container";
import SmallPetCardList from "@/components/SmallPetCardList";
import { useCreateImage } from "@/hooks/mutation/usePostImage";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddSmallPicture from "../../../../components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "../../../../components/Admin/Pets/Add/AddThumbnail";
import EditInfoAndSubmit, {
  info,
} from "../../../../components/Admin/Pets/Add/EditInfoAndSubmit";
import EditName from "../../../../components/Admin/Pets/Add/EditName";
import EditText from "../../../../components/Admin/Pets/Add/EditText";

import { useCreatePet } from "@/hooks/mutation/usePostPet";
import AdminLayout from "@/layouts/AdminLayout";
import dayjs from "dayjs";
const adminCreate = () => {
  const { data, isLoading } = usePetsQuery();

  const [name, setName] = useState("กรุณาใส่ชื่อ...");
  const [text, setText] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [origin, setOrigin] = useState("fromClub");
  // origin : fromClub / fromOutside
  const [pictures, setPictures] = useState<File[]>([]);
  const [info, setInfo] = useState<info>({
    gender: "-",
    type: "-",
    color: "-",
    age: "-",
    nature: "-",
    vaccine: false,
    sterile: false,
  });

  const [enableSubmit, setEnableSubmit] = useState(false);
  useEffect(() => {
    if (
      info.gender === "-" ||
      info.type === "-" ||
      info.color === "-" ||
      info.age === "-" ||
      name === "กรุณาใส่ชื่อ..."
    ) {
      setEnableSubmit(false);
    } else {
      setEnableSubmit(true);
    }
  }, [info.gender, info.type, info.color, info.age, name]);

  const postImageMutation = useCreateImage();
  const postPetMutation = useCreatePet();

  const handleSubmit = async () => {
    if (info.gender === "-") return; // already detect "-" by disable post button

    const allImageFile: File[] = await Promise.all(
      thumbnail ? [thumbnail, ...pictures] : pictures
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
      .map((id) => id ?? ""); // map for bypass ts type checking

    const petData: postPetRequest = {
      type: info.type,
      name: name,
      birthdate: dayjs(info.age).toISOString(),
      gender: info.gender as "male" | "female",
      color: info.color,
      pattern: "a", // remove later
      habit: info.nature,
      caption: text,
      status: "findHome",
      is_sterile: info.sterile,
      is_vaccinated: info.vaccine,
      is_visible: true,
      origin: `${origin === "fromClub" ? "club" : "entrust"}`,
      images: allImage,
    };

    postPetMutation.mutate(petData);
  };

  return (
    <>
      {/* Icon return & small EditName */}
      <Container>
        <Link to="/admin/pets/">
          <Icon icon="ion:chevron-back" className="h-8 w-8 text-primary" />
        </Link>
        <div className="visible flex w-full flex-col md:hidden">
          <EditName value={name} setValue={setName} isAdmin />
        </div>
      </Container>

      <Container className="flex flex-col gap-8 md:flex-row">
        {/* Thumpnail */}
        <div className="w-full max-w-80 self-center md:w-80">
          <AddThumbnail
            valueThumbnail={thumbnail}
            setThumbnail={setThumbnail}
            valueOrigin={origin}
            setOrigin={setOrigin}
          />
        </div>

        {/* large EditName + EditText */}
        <div className="flex w-full flex-col md:justify-between md:gap-4">
          <div className="hidden w-full md:flex md:flex-col">
            <EditName value={name} setValue={setName} isAdmin />
          </div>
          <EditText value={text} setValue={setText} isAdmin />
        </div>
      </Container>

      {/* Small Picture */}
      <Container>
        <AddSmallPicture value={pictures} setValue={setPictures} />
      </Container>

      <div className="mx-auto my-8 flex max-w-[1536px] gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={info}
          setValue={setInfo}
          onSubmit={handleSubmit}
          enableSubmit={enableSubmit}
          isAdmin
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
      <div className="hidden md:block">
        <SmallPetCardList isLoading={isLoading} pets={data?.pets} />
      </div>
    </>
  );
};

export default adminCreate;

export const Layout = AdminLayout;
