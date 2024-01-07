import Button from "@/components/Button";
import PetDetail from "@/components/PetCard/PetDetail";
import TogglePetButton from "@/components/PetCard/TogglePetButton";
import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Johnjud from "../../assets/main/johnjudLogo.svg";

type PetCardProps = {
  id: string;
  image: string;
  type: string;
  name: string;
  status: "findHome" | "adopted";
  gender: "male" | "female";
  birthDate: string;
  habit: string;
  isSterile: boolean;
  isLiked: boolean;
  isVisibled: boolean;
};

const PetCard = ({
  id,
  image = Johnjud,
  name,
  status,
  gender,
  birthDate,
  habit,
  isSterile,
  isLiked,
  isVisibled,
}: PetCardProps) => {
  const role = useMemo(() => {
    return "user";
  }, []);

  const likedHeart = useMemo(() => {
    return isLiked ? "ph:heart-fill" : "ph:heart";
  }, [isLiked]);

  const linkTo = useMemo(() => {
    return "/pets/" + id;
  }, [id]);

  const { years, months } = useMemo(() => {
    return UtcStringToYearMonth({ utcString: birthDate });
  }, [birthDate]);

  const petGender = useMemo(() => {
    return gender === "female" ? "ตัวเมีย" : "ตัวผู้";
  }, [gender]);

  const petSterile = useMemo(() => {
    return isSterile ? "ทำหมันแล้ว" : "ยังไม่ได้ทำหมัน";
  }, [isSterile]);

  const adoptedButton = useMemo(() => {
    return status === "adopted" ? "disabled" : "accent-red";
  }, [status]);

  if (role === "user" && isVisibled === false) {
    return;
  } else {
    return (
      <Link to={linkTo}>
        <div className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow">
          <img
            src={image}
            alt={name}
            className="mb-4 w-72 rounded-2xl shadow"
          />
          <div className="mb-2 flex w-72 flex-row items-center justify-between">
            <p className="text-2xl font-bold text-black">{name}</p>
            <button onClick={() => {}}>
              <Icon
                icon={role === "user" ? likedHeart : "ph:pencil-simple"}
                className="relative h-8 w-8 text-accent-red"
              />
            </button>
          </div>
          <div className="flex w-72 flex-row items-end justify-between">
            <div className=" items-center space-y-1">
              <PetDetail
                icon={"ph:paw-print"}
                description={`${petGender}, อายุ ${years} ปี ${months} เดือน`}
              />
              <PetDetail icon={"ph:music-notes"} description={habit} />
              <PetDetail icon={"ph:medal"} description={petSterile} />
            </div>
            {role === "user" ? (
              <Button
                text={"รับเลี้ยง"}
                variant={adoptedButton}
                rounded="full"
                className="max-h-10 max-w-28 text-base"
              />
            ) : (
              <TogglePetButton visibility={isVisibled} />
            )}
          </div>
        </div>
      </Link>
    );
  }
};

export default PetCard;
