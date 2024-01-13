import logo from "@/assets/details/logo.png";
import EditInfoAndSubmit, { info } from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import BigPetCard from "@/components/Pets/details/BigPetCard";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

const Details = ({
    isAdmin
} : {
    isAdmin :boolean
}) => {
  const [petInfo, setPetInfo] = useState<info>({
    gender: "ครับ",
    breed: "ครับ",
    age: "ครับ",
    nature: "ครับ",
    vaccine: true,
    sterile: false
  })

  return (
    <>
      <BigPetCard isAdmin={isAdmin} />
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit value={petInfo} setValue={setPetInfo} onSubmit={()=>console.log("ครับ")} isAdmin={isAdmin}/>
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
    </>
  );
};

export default Details;

export const Layout = MainLayout;