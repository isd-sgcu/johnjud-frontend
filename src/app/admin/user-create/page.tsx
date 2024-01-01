import { useEffect, useState } from "react";
import AddPicture from "../../../components/admin/user-create/AddPicture";
import EditName from "../../../components/admin/user-create/EditName";
import EditText from "../../../components/admin/user-create/EditText";
import MainLayout from "../../../layouts/MainLayout";
import EditInfo from "../../../components/admin/user-create/EditInfo";

const userCreate = () => {
  const [name, setName] = useState("...กรุณาใส่ชื่อ");
  const [text, setText] = useState("");
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
      <div className="flex items-center justify-between overflow-clip px-[10%] py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          className="flex flex-none"
        >
          <path
            d="M11 21L1 11L11 1"
            stroke="#08878E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <EditName value={name} setValue={setName} />
      </div>
      <div className="mx-[10%] flex h-1 w-1/5 self-end bg-primary" />
      <div className="flex flex-col px-[10%] pt-6 items-center">
        <AddPicture />
        <EditText value={text} setValue={setText} />
      </div>
      <div className="flex flex-col mt-6 lg:mt-12">
        <EditInfo value={info} setValue={setInfo}/>
      </div>
    </div>
  );
};

export default userCreate;

export const Layout = MainLayout;
