import dog from "@/assets/dog.webp";
import Button from "@/components/Button";
import PetDetail from "@/components/Card/PetCard/PetDetail";
import TogglePetButton from "@/components/Card/PetCard/TogglePetButton";
import { useUpdateVisibility } from "@/hooks/mutation/useUpdateVisibility";
import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react";
import { useCallback, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type PetCardProps = {
  id: string;
  image: string | undefined;
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
  image,
  name,
  status,
  gender,
  birthDate,
  habit,
  isSterile,
  isLiked,
  isVisibled,
}: PetCardProps) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [visibility, setVisibility] = useState(isVisibled);
  const [liked, setLiked] = useState(isLiked);

  const { mutate } = useUpdateVisibility();
  const toggleVisibility = useCallback(() => {
    mutate({
      id: id,
      visibility: !visibility,
    });
    setVisibility((prev) => !prev);
  }, [visibility, id, mutate]);

  const role = useMemo(() => {
    return pathname.includes("/admin") ? "admin" : "user";
  }, []);

  const linkTo = useMemo(() => {
    return role === "admin" ? `/admin/pets/${id}/edit` : `/pets/${id}`;
  }, [id]);

  const age = useMemo(() => {
    const { years, months } = UtcStringToYearMonth({ utcString: birthDate });
    return years + " ปี " + months + " เดือน";
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

  const handleLikePet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLiked((prev) => !prev);
    console.log("liked : " + id);
  };

  const handleAdopt = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/pets/${id}/adopt`);
  };

  const handleDeletePet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("deleted : " + id);
  };

  return (
    <Link to={linkTo}>
      <div className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow">
        <img
          src={image ? image : dog}
          alt={name}
          className="mb-4 h-72 w-72 rounded-2xl object-cover object-center shadow"
        />
        <div className="mb-2 flex w-72 flex-row items-center justify-between">
          <p className="w-3/4 overflow-hidden text-2xl font-bold text-black">
            {name}
          </p>
          {role === "admin" ? (
            <button onClick={handleDeletePet} className="hover:brightness-90">
              <Icon
                icon={"ph:trash"}
                className="relative h-8 w-8 text-accent-red"
              />
            </button>
          ) : (
            <button onClick={handleLikePet} className="hover:brightness-90">
              <Icon
                icon={liked ? "ph:heart-fill" : "ph:heart"}
                className="relative h-8 w-8 text-accent-red"
              />
            </button>
          )}
        </div>
        <div className="flex w-full flex-row items-end justify-between gap-2">
          <div className="w-3/5 space-y-1">
            <PetDetail
              icon={"ph:paw-print"}
              description={`${petGender}, ${age}`}
            />
            <PetDetail icon={"ph:music-notes"} description={habit} />
            <PetDetail icon={"ph:medal"} description={petSterile} />
          </div>
          {role === "user" ? (
            <Button
              text={"รับเลี้ยง"}
              variant={adoptedButton}
              rounded="full"
              className="max-h-10 max-w-28 flex-shrink-0 text-base"
              onClick={handleAdopt}
            />
          ) : (
            <TogglePetButton
              visibility={visibility}
              onClick={toggleVisibility}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
