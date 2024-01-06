import { Icon } from "@iconify/react";
import { useState } from "react";
import johnjudLogo from "../../../../assets/johnjud-with-text.png";
import AddSmallPicture from "../../../../components/admin/user-create/AddSmallPicture";
import AddThumpnail from "../../../../components/admin/user-create/AddThumpnail";
import EditInfoAndSubmit from "../../../../components/admin/user-create/EditInfoAndSubmit";
import EditName from "../../../../components/admin/user-create/EditName";
import EditText from "../../../../components/admin/user-create/EditText";
import MainLayout from "../../../../layouts/MainLayout";
import Container from "@/components/Container";

const userCreate = () => {
  const [name, setName] = useState("กรุณาใส่ชื่อ...");
  const [text, setText] = useState("");
  const [thumpnail, setThumpnail] = useState<File | null>(null);
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

  const handleSubmit = () => { };

  return (
    <div className="grid w-screen grid-cols-1 flex-col pb-28 lg:grid-cols-3 lg:pb-20">
      {/* Icon return & small EditName */}
      <div className="flex justify-between overflow-clip px-[10%] py-2 lg:col-span-3 lg:px-12">
        <Icon
          icon="ion:chevron-back"
          color="#08878E"
          className="mt-1 flex h-8 w-8 flex-none"
        />
        <div className="visible flex w-full flex-col lg:hidden">
          <EditName value={name} setValue={setName} />
        </div>
      </div>

      {/* Thumpnail */}
      <Container className="flex h-fit w-full justify-center px-6 pt-8 lg:justify-start lg:pl-[25%] lg:pr-0 xl:pl-[25%]">
        <AddThumpnail
          valueThumpnail={thumpnail}
          setThumpnail={setThumpnail}
          valueOrigin={origin}
          setOrigin={setOrigin}
        />
      </Container>

      {/* large EditName + EditText */}
      <Container className="flex w-full flex-col px-6 pt-8 lg:col-span-2 lg:justify-between lg:pr-[12.5%] xl:pr-[12.5%] xl:pl-6">
        <div className="hidden w-full lg:mb-4 lg:flex lg:flex-col">
          <EditName value={name} setValue={setName} />
        </div>
        <EditText value={text} setValue={setText} />
      </Container>

      {/* Small Picture */}
      <div className="flex w-full pl-6 lg:col-span-3 lg:pl-[8.33%]">
        <AddSmallPicture value={pictures} setValue={setPictures} />
      </div>

      {/* Edit info + Pose Button*/}
      <div className="mt-8 flex flex-col lg:col-span-2 lg:mt-10 lg:h-full">
        <EditInfoAndSubmit
          value={info}
          setValue={setInfo}
          onSubmit={handleSubmit}
        />
      </div>

      {/* large Logo */}
      <Container className="hidden w-full justify-center object-contain lg:mt-10 lg:flex">
        <img src={johnjudLogo} className="flex h-64 w-44"></img>
      </Container>
    </div>
  );
};

export default userCreate;

export const Layout = MainLayout;