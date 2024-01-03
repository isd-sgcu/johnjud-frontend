import { useState } from "react";
import { Icon } from '@iconify/react';
import AddThumpnail from "../../../components/admin/user-create/AddThumpnail";
import EditName from "../../../components/admin/user-create/EditName";
import EditText from "../../../components/admin/user-create/EditText";
import MainLayout from "../../../layouts/MainLayout";
import EditInfoAndSubmit from "../../../components/admin/user-create/EditInfoAndSubmit";
import AddSmallPicture from "../../../components/admin/user-create/AddSmallPicture";
import johnjudLogo from "../../../assets/johnjud-with-text.png"

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
    sterile: false
  });

  const handleSubmit = () => {

  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-screen flex-col pb-28 pt-6 lg:pb-20 lg:pt-8">
      {/* Icon return & small EditName */}
      <div className="flex lg:col-span-3 justify-between overflow-clip px-[10%] lg:px-12 py-2">
        <Icon icon="ion:chevron-back" color="#08878E" className="flex flex-none w-8 h-8 mt-1" />
        <div className="flex flex-col w-full visible lg:hidden">
          <EditName value={name} setValue={setName} />
        </div>
      </div>

      {/* Thumpnail */}
      <div className="flex w-full justify-center px-6 pt-8 lg:pl-[25%] lg:pr-0 lg:justify-start">
        <AddThumpnail valueThumpnail={thumpnail} setThumpnail={setThumpnail} valueOrigin={origin} setOrigin={setOrigin} />
      </div>

      {/* large EditName + EditText */}
      <div className="flex flex-col w-full px-6 pt-8 lg:col-span-2 lg:justify-between lg:pr-[12.5%]">
        <div className="w-full hidden lg:flex lg:flex-col lg:mb-4">
          <EditName value={name} setValue={setName} />
        </div>
        <EditText value={text} setValue={setText} />
      </div>

      {/* Small Picture */}
      <div className="flex w-full pl-6 lg:col-span-3 lg:pl-[8.33%]">
        <AddSmallPicture value={pictures} setValue={setPictures} />
      </div>

      {/* Edit info + Pose Button*/}
      <div className="flex flex-col mt-8 lg:mt-10 lg:col-span-2 lg:h-full">
        <EditInfoAndSubmit value={info} setValue={setInfo} onSubmit={handleSubmit}/>
      </div>

      <div className="hidden lg:flex w-full justify-center object-contain lg:mt-10">
        <img src={johnjudLogo} className="flex w-44 h-64"></img>
      </div>
    </div>
  );
};

export default userCreate;

export const Layout = MainLayout;
