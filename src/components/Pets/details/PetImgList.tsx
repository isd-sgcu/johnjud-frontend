import petImg from "@/assets/details/pet.svg";
import plusIcon from "@/assets/details/plusIcon.svg";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";

const PetImgList = () => {
  return (
    <div className="mx-auto flex w-full gap-6 overflow-auto xl:w-[80rem]">
      <img
        src={petImg}
        alt="pet-img"
        className="h-48 w-48 rounded-3xl drop-shadow-sm"
      />
      <img
        src={petImg}
        alt="pet-img"
        className="h-48 w-48 rounded-3xl drop-shadow-sm"
      />
      <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-white shadow-[0_0_4px_2px] shadow-zinc-300 ">
        <img src={plusIcon} alt="plus-icon" />
      </div>
    </div>
  );
};

export default PetImgList;
