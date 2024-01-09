import petImg from "@/assets/details/pet.svg";
import plusIcon from "@/assets/details/plusIcon.svg";

const PetImgList = () => {
  return (
    <div className="mx-auto flex w-full gap-6  overflow-x-clip overflow-y-visible px-6 xl:w-[80rem] xl:px-0">
      <img
        src={petImg}
        alt="pet-img"
        className="h-48 w-48 rounded-3xl bg-zinc-300 shadow-[0_0_4px_2px] shadow-zinc-300"
      />
      <img
        src={petImg}
        alt="pet-img"
        className="h-48 w-48 rounded-3xl bg-zinc-300 shadow-[0_0_4px_2px] shadow-zinc-300"
      />
      <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-white shadow-[0_0_4px_2px] shadow-zinc-300 ">
        <img src={plusIcon} alt="plus-icon" />
      </div>
    </div>
  );
};

export default PetImgList;
