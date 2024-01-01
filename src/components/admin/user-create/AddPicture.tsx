import PlusIcon from "./PlusIcon";

const AddPicture = (props) => {
  return (
    <div className="flex w-full flex-col max-w-80">
      <div className="flex aspect-square w-full items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm ">
        <PlusIcon />
      </div>
    </div>
  );
};

export default AddPicture;
