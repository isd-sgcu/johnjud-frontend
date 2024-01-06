import { Icon } from "@iconify/react";
import PetBadge from "./PetBadge";

interface AddThumpnailProps {
  valueThumpnail: File | null;
  setThumpnail: React.Dispatch<React.SetStateAction<File | null>>;
  valueOrigin: string;
  setOrigin: React.Dispatch<React.SetStateAction<string>>;
}

const AddThumpnail = (props: AddThumpnailProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImg = event.target.files;
    if (selectedImg && selectedImg.length !== 0) {
      props.setThumpnail(selectedImg[0]);
    }
  };

  return (
    <div className="relative flex aspect-square h-fit w-full max-w-80 flex-col">
      {props.valueThumpnail === null ? (
        <div className="flex h-full w-full items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm ">
          <Icon icon="custom:plus" className="h-[30%] w-[30%]" />
        </div>
      ) : (
        <div className="flex h-full w-full">
          <img
            src={URL.createObjectURL(props.valueThumpnail)}
            alt="Thumpnail"
            className="h-full w-full rounded-3xl border-2 border-[#D9D9D9] object-cover object-center drop-shadow-sm"
          ></img>
        </div>
      )}

      <div className="absolute bottom-5 right-5">
        <input
          type="file"
          id="thumpnailPicture"
          accept=".jpeg, .jpg, .png"
          multiple={false}
          className="hidden"
          onChange={handleOnChange}
        />
        <label htmlFor="thumpnailPicture">
          <Icon icon="custom:pencil" className="h-8 w-8 cursor-pointer" />
        </label>
      </div>

      <div className="absolute -top-[2px] right-4">
        <PetBadge value={props.valueOrigin} setValue={props.setOrigin} />
      </div>
    </div>
  );
};

export default AddThumpnail;
