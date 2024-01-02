import { useState } from "react";
import { Icon } from '@iconify/react';
import AddThumpnail from "../../../components/admin/user-create/AddThumpnail";
import EditName from "../../../components/admin/user-create/EditName";
import EditText from "../../../components/admin/user-create/EditText";
import MainLayout from "../../../layouts/MainLayout";
import EditInfo from "../../../components/admin/user-create/EditInfo";
import AddSmallPicture from "../../../components/admin/user-create/AddSmallPicture";
import PetBadge from "../../../components/admin/user-create/PetBadge";

const userCreate = () => {
  const [name, setName] = useState("...กรุณาใส่ชื่อ");
  const [text, setText] = useState("");
  const [thumpnail, setThumpnail] = useState();
  const [origin, setOrigin] = useState("fromClub");
  // fromClub / fromOutside
  const [pictures, setPictures] = useState(["sample1", "sample2"]);
  const [info, setInfo] = useState({
    gender: "-",
    breed: "-",
    age: "-",
    nature: "-",
    vaccine: false,
    sterile: false
  });

  return (
    <div className="flex w-screen flex-col pb-28 pt-6 lg:pb-20 lg:pt-8">
      {/* TODO: responsive */}
      <div className="flex items-center justify-between overflow-clip px-[10%] py-2">
        <Icon icon="ion:chevron-back" color="#08878E" className="flex flex-none w-8 h-8" />
        <EditName value={name} setValue={setName} />
      </div>
      <div className="mx-[10%] flex h-1 rounded-full w-1/5 self-end bg-primary" />
      <div className="flex flex-col px-[10%] pt-8 items-center">
        <AddThumpnail valueThumpnail={thumpnail} setThumpnail={setThumpnail} valueOrigin={origin} setOrigin={setOrigin}/>
        <EditText value={text} setValue={setText} />
      </div>
      <div className="flex w-full pl-[10%]">
        <AddSmallPicture value={pictures} setValue={setPictures} />
      </div>
      <div className="flex flex-col mt-8 lg:mt-10">
        <EditInfo value={info} setValue={setInfo} />
      </div>
      <div className="flex px-[10%] w-full mt-6 cursor-pointer">
        <div className="py-2 rounded-3xl bg-[#C81425] text-center text-white font-semibold text-2xl w-full">
          โพสต์เลย
        </div>
      </div>
    </div>
  );
};

export default userCreate;

export const Layout = MainLayout;
