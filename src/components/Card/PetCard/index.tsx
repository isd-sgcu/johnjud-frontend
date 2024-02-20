import dog from "@/assets/dog.webp";
import Button from "@/components/Button";
import PetDetail from "@/components/Card/PetCard/PetDetail";
import TogglePetButton from "@/components/Card/PetCard/TogglePetButton";
<<<<<<< HEAD
import useStore from "@/store/favStore";
=======
import Modal from "@/components/Modal";
import { useDeletePet } from "@/hooks/mutation/useDeletePet";
import { useUpdateVisibility } from "@/hooks/mutation/useUpdateVisibility";
>>>>>>> dev
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

<<<<<<< HEAD
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
=======
const PetCard = ({
>>>>>>> dev
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

<<<<<<< HEAD
  const addToFavorites = useStore((state) => state.addToFavorites);
  const removeFromFavorites = useStore((state) => state.removeFromFavorites);
  const handleFavoriteClick = () => {
    if (liked) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
    setLiked((prev) => !prev);
  };

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
          {role === "user" && (
            <button onClick={handleFavoriteClick}>
              {isLiked ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          )}
          {role === "user" && (
            <button onClick={handleFavoriteClick}>
            <Icon
              icon={role === "user" ? likedHeart : "ph:pencil-simple"}
              className="relative h-8 w-8 text-accent-red"
            />
            </button>
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
=======
  const handleLikePet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLiked((prev) => !prev);
    console.log("liked : " + id);
  };

  const handleAdopt = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/pets/${id}/adopt`);
  };

  return (
    <>
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
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setOpenDeleteModal(true);
                }}
                className="hover:brightness-90"
              >
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
>>>>>>> dev
          </div>
        </div>
      </Link>

      <Modal
        title={"ยืนยันการลบสัตว์หรือไม่"}
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        button={
          <>
            <Button
              text="ยกเลิก"
              variant="accent-red"
              rounded="full"
              onClick={() => setOpenDeleteModal(false)}
            />
            <Button
              text="ตกลง"
              variant="primary"
              rounded="full"
              onClick={() => deletePet(id)}
            />
          </>
        }
      >
        <p className="text-accent-gray">ยินยันการลบ {name} หรือไม่</p>
      </Modal>
    </>
  );
};

export default PetCard;
