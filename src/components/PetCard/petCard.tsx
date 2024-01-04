import Button from "@/components/Button";
import TogglePetButton from "@/components/PetCard/TogglePetButton";
import PetDescription from "@/components/PetCard/petDescription";
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
  name: string;
  status: PetStatus;
  gender: PetGender;
  age: string;
  habit: string;
  isSterile: boolean;
  isLiked: boolean;
  isVisibled?: boolean;
  onClick?: () => void;
};

const PetCard = ({
  role = "admin",
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
  const isAdopted = status === PetStatus.adopted ? "disabled" : "accent-red";
  const [isVisible, setIsVisible] = useState(isVisibled);
  if (role === "user") {
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
              icon={likedHeart}
              color={"#C81425"}
              className="relative h-8 w-8"
            />
          </button>
        </div>
        <div className="flex w-72 flex-row items-end justify-between">
          <div className=" items-center">
            <PetDescription
              icon={"ph:paw-print"}
              description={`${petGender}, ${age}`}
              color={"#808086"}
            />
            <PetDescription
              icon={"ph:music-notes"}
              description={habit}
              color={"#808086"}
            />
            <PetDescription
              icon={"ph:medal"}
              description={petSterile}
              color={"#808086"}
            />
          </div>
          <Button
            text={"รับเลี้ยง"}
            variant={isAdopted}
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
            <PetDescription
              icon={"ph:paw-print"}
              description={`${petGender}, ${age}`}
              color={"#808086"}
            />
            <PetDescription
              icon={"ph:music-notes"}
              description={habit}
              color={"#808086"}
            />
            <PetDescription
              icon={"ph:medal"}
              description={petSterile}
              color={"#808086"}
            />
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
