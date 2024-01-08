import Container from "@/components/Container";
import { Icon } from "@iconify/react";
import { useState } from "react";
import johnjudLogo from "../../../../assets/johnjud-with-text.png";
import AddSmallPicture from "../../../../components/admin/user-create/AddSmallPicture";
import AddThumbnail from "../../../../components/admin/user-create/AddThumbnail";
import EditInfoAndSubmit from "../../../../components/admin/user-create/EditInfoAndSubmit";
import EditName from "../../../../components/admin/user-create/EditName";
import EditText from "../../../../components/admin/user-create/EditText";
import MainLayout from "../../../../layouts/MainLayout";

const userCreate = () => {
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
      <div className="flex justify-between px-6 py-2 lg:block lg:px-12">
        <Icon
          icon="ion:chevron-back"
          className="mb-1 flex h-8 w-8 flex-none self-center text-primary"
        />
        <div className="visible flex w-full flex-col md:hidden">
          <EditName value={name} setValue={setName} />
        </div>
      </div>

      <Container className="flex flex-col gap-8 md:flex-row">
        {/* Thumpnail */}
        <div className="w-full md:w-80">
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
            <EditName value={name} setValue={setName} />
          </div>
          <EditText value={text} setValue={setText} />
        </div>
      </Container>

      {/* Small Picture */}
      <div className="flex w-full pl-6 lg:pl-[8%]">
        <AddSmallPicture value={pictures} setValue={setPictures} />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Edit info + Pose Button*/}
        <div className="mt-8 flex w-full flex-col lg:h-full">
          <EditInfoAndSubmit
            value={info}
            setValue={setInfo}
            onSubmit={handleSubmit}
          />
        </div>

        {/* large Logo */}
        <Container className="hidden w-1/3 shrink-0 justify-center object-contain lg:flex">
          <img src={johnjudLogo} className="flex h-64 w-44"></img>
        </Container>
      </div>
    </>
  );
};

export default userCreate;

export const Layout = MainLayout;
