import dog from "@/assets/dog.webp";
import Button from "@/components/Button";
import PetDetail from "@/components/Card/PetCard/PetDetail";
import TogglePetButton from "@/components/Card/PetCard/TogglePetButton";
import Modal from "@/components/Modal";
import { useDeletePet } from "@/hooks/mutation/useDeletePet";
import { useUpdateVisibility } from "@/hooks/mutation/useUpdateVisibility";
import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useStore from "@/store/favStore";

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

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  event.stopPropagation();
};

const toggleHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
  handleClick(event);
};

const likeHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
  handleClick(event);
};

const adoptHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
  handleClick(event);
};

const PetCard: React.FC<PetCardProps> = ({
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
  const { mutate: deletePet } = useDeletePet();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
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
    const { years, months, days } = UtcStringToYearMonth({
      utcString: birthDate,
    });

    const age = years > 0 ? `${years} ปี ` : "";
    return age + (months > 0 ? `${months} เดือน ` : `${days} วัน`);
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
  const addToFavorites = useStore((state) => state.addToFavorites);
  const removeFromFavorites = useStore((state) => state.removeFromFavorites);
  return (
    <Link to={linkTo}>
      <div className="flex w-80 flex-col items-start justify-start rounded-2xl bg-white p-4 shadow">
        <img
          src={image}
          alt={name}
          className="mb-4 h-72 w-72 rounded-2xl object-cover object-center shadow"
        />
        <div className="mb-2 flex w-72 flex-row items-center justify-between">
          <p className="text-2xl font-bold text-black">{name}</p>
          {role === "user" ? (
            <button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {(isLiked ? removeFromFavorites(id) : addToFavorites(id))
                {
                  isLiked ? "Remove from Favorites" : "Add to Favorites";
                }
              }}
            >
              <Icon
                icon={role === "user" ? likedHeart : "ph:pencil-simple"}
                className="relative h-8 w-8 text-accent-red"
              />
            </button>
          ) : (
            <div></div>
          )}
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
              onClick={adoptHandle}
            />
          ) : (
            <TogglePetButton visibility={isVisibled} onClick={toggleHandle} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
