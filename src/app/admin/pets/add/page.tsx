import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import johnjudLogo from "../../../../assets/johnjud-with-text.png";
import AddSmallPicture from "../../../../components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "../../../../components/Admin/Pets/Add/AddThumbnail";
import EditInfoAndSubmit from "../../../../components/Admin/Pets/Add/EditInfoAndSubmit";
import EditName from "../../../../components/Admin/Pets/Add/EditName";
import EditText from "../../../../components/Admin/Pets/Add/EditText";
import MainLayout from "../../../../layouts/MainLayout";
import SmallPetCardList from "@/components/SmallPetCardList";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";

const userCreate = () => {

  const { data } = usePetsQuery();

  const [name, setName] = useState("กรุณาใส่ชื่อ...");
  const [text, setText] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [origin, setOrigin] = useState("fromClub");
  // origin : fromClub / fromOutside
  const [pictures, setPictures] = useState<File[]>([]);
  const [info, setInfo] = useState({
    gender: "-",
    breed: "-",
    age: "-",
    nature: "-",
    vaccine: false,
    sterile: false,
  });

  const handleSubmit = () => {};

  return (
    <>
      {/* Icon return & small EditName */}
      <div className="flex justify-between px-6 lg:block lg:px-12">
        <Link to="/admin/pets/">
          <Icon icon="ion:chevron-back" className="h-8 w-8 text-primary" />
        </Link>
        <div className="visible flex w-full flex-col md:hidden">
          <EditName value={name} setValue={setName} isAdmin />
        </div>
      </div>

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

      <div className="flex flex-col lg:flex-row">
        {/* Edit info + Pose Button*/}
        <div className="flex w-full flex-col lg:h-full">
          <EditInfoAndSubmit
            value={info}
            setValue={setInfo}
            onSubmit={handleSubmit}
            isAdmin
          />
        </div>

        {/* large Logo */}
        <div className="hidden w-1/3 shrink-0 justify-center object-contain lg:flex">
          <img src={johnjudLogo} className="flex h-64 w-44"></img>
        </div>
      </div>
      <div className="hidden md:block">
      {data &&<SmallPetCardList pets = {data.pets}/>} 
      </div>
    </>
  );
};

export default userCreate;

export const Layout = MainLayout;
