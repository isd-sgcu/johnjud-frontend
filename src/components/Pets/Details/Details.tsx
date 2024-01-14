import logo from "@/assets/details/logo.png";
import EditInfoAndSubmit, {
  info,
} from "@/components/Admin/Pets/Add/EditInfoAndSubmit";
import BigPetCard from "@/components/Pets/Details/BigPetCard";
import { usePageParams } from "@/hooks/usePageParams";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";
import SmallPetCardList from "./SmallPetCardList";

const Details = ({ isAdmin }: { isAdmin: boolean }) => {
  const param = usePageParams(["id"]);
  const [petInfo, setPetInfo] = useState<info>({
    gender: "ครับ",
    breed: "ครับ",
    age: "ครับ",
    nature: "ครับ",
    vaccine: true,
    sterile: false,
  });

  const [isFav, setIsFav] = useState(false);

  const handleSubmit = (showInfo: info) => {
    setPetInfo(showInfo);
    console.log(showInfo);
  };

  const handleFavPressed = () => {
    setIsFav(!isFav);
  };

  return (
    <>
      <BigPetCard isAdmin={isAdmin} />
      <div className="my-8 flex gap-20 xl:justify-between xl:pr-24">
        <EditInfoAndSubmit
          value={petInfo}
          setValue={setPetInfo}
          onSubmit={handleSubmit}
          isAdmin={isAdmin}
          isFav={isFav}
          handleFavPressed={handleFavPressed}
          id={param.id}
        />
        <img src={logo} alt="logo" className="hidden h-64 w-64 xl:block" />
      </div>
      <SmallPetCardList />
    </>
  );
};

export default Details;

export const Layout = MainLayout;
