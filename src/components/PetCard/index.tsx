import Button from "@/components/Button";
import PetDescriptionText from "@/components/PetCard/PetDescriptionText";
import TogglePetButton from "@/components/PetCard/TogglePetButton";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Johnjud from "../../assets/main/johnjudLogo.svg";

export enum PetStatus {
  findHome,
  adopted,
}

export enum PetGender {
  male,
  female,
}

type PetCardProps = {
  role: string;
  type: string;
  name: string;
  status: PetStatus;
  gender: PetGender;
  age: string;
  habit: string;
  isSterile: boolean;
  isLiked: boolean;
  isVisibled: boolean;
  onClick?: () => void;
};

const PetCard = ({
  role = "user",
  type = "dog",
  name = "ไรลีย์, พันธุ์แลบราดดอร์",
  status = PetStatus.adopted,
  gender = PetGender.female,
  age = "อายุ 6 ปี 11 เดือน",
  habit = "นิสัยขี้เล่น",
  isSterile = true,
  isLiked = true,
  isVisibled = true,
  onClick,
}: PetCardProps) => {
  const likedHeart = isLiked ? "ph:heart-fill" : "ph:heart";
  const petGender = gender === PetGender.female ? "ตัวเมีย" : "ตัวผู้";
  const petSterile = isSterile ? "ทำหมันแล้ว" : "ยังไม่ได้ทำหมัน";
  const adoptedButton =
    status === PetStatus.adopted ? "disabled" : "accent-red";
  const [isVisible, setIsVisible] = useState(isVisibled);
  if (role === "user" && isVisibled === true) {
    return (
      <div
        className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow"
        onClick={() => onClick}
      >
        <img
          src={Johnjud}
          alt={type}
          className="mb-4 w-72 rounded-2xl shadow"
        />
        <div className="mb-2 flex w-72 flex-row items-center justify-between">
          <p className="text-2xl font-bold text-black">{name}</p>
          <button onClick={() => {}}>
            <Icon
              icon={likedHeart}
              color={"#C81425"}
              className="relative h-8 w-8"
            />
          </button>
        </div>
        <div className="flex w-72 flex-row items-end justify-between">
          <div className=" items-center">
            <PetDescriptionText
              icon={"ph:paw-print"}
              description={`${petGender}, ${age}`}
            />
            <PetDescriptionText icon={"ph:music-notes"} description={habit} />
            <PetDescriptionText icon={"ph:medal"} description={petSterile} />
          </div>
          <Button
            text={"รับเลี้ยง"}
            variant={adoptedButton}
            rounded="full"
            className="max-h-10 max-w-28 text-base"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow"
        onClick={() => onClick}
      >
        <img
          src={Johnjud}
          alt="_blank"
          className="mb-4 w-72 rounded-2xl shadow"
        />
        <div className="mb-2 flex w-72 flex-row items-center justify-between">
          <p className="text-2xl font-bold text-black">{name}</p>
          <button onClick={() => {}}>
            <Icon
              icon={"ph:pencil-simple"}
              color={"#C81425"}
              className="relative h-9 w-9"
            />
          </button>
        </div>
        <div className="flex w-72 flex-row items-end justify-between">
          <div className=" items-center">
            <PetDescriptionText
              icon={"ph:paw-print"}
              description={`${petGender}, ${age}`}
            />
            <PetDescriptionText icon={"ph:music-notes"} description={habit} />
            <PetDescriptionText icon={"ph:medal"} description={petSterile} />
          </div>
          <TogglePetButton
            isVisible={isVisible}
            onChange={() => setIsVisible(!isVisible)}
          />
        </div>
      </div>
    );
  }
};

export default PetCard;
