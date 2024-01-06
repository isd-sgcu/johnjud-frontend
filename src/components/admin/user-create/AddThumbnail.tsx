import { Icon } from "@iconify/react";
import PetBadge from "./PetBadge";

interface AddThumbnailProps {
  valueThumbnail: File | null;
  setThumbnail: React.Dispatch<React.SetStateAction<File | null>>;
  valueOrigin: string;
  setOrigin: React.Dispatch<React.SetStateAction<string>>;
}

const AddThumbnail = (props: AddThumbnailProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImg = event.target.files;
    if (selectedImg && selectedImg.length !== 0) {
      props.setThumbnail(selectedImg[0]);
    }
    console.log(props.valueThumbnail);
  };

  return (
    <div className="relative flex aspect-square h-fit w-full max-w-80 flex-col">
      {props.valueThumbnail === null ? (
        <div className="flex h-full w-full rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm items-center justify-center">
          <input
            type="file"
            id="thumbnailPicturePlus"
            accept=".jpeg, .jpg, .png"
            multiple={false}
            className="hidden"
            onChange={handleOnChange}
          />
          <label htmlFor="thumbnailPicturePlus" className="flex w-full h-full items-center justify-center">
            <Icon icon="custom:plus" className="h-[30%] w-[30%] cursor-pointer" />
          </label>
        </div>
      ) : (
        <div className="flex h-full w-full">
          <img
            src={URL.createObjectURL(props.valueThumbnail)}
            alt="Thumbnail"
            className="h-full w-full rounded-3xl border-2 border-[#D9D9D9] object-cover object-center drop-shadow-sm"
          ></img>
        </div>
      )}

      <div className={"absolute bottom-5 right-5 " + ((props.valueThumbnail === null) ? "hidden" : "visible")}>
        <input
          type="file"
          id="thumbnailPicturePencil"
          accept=".jpeg, .jpg, .png"
          multiple={false}
          className="hidden"
          onChange={handleOnChange}
        />
        <label htmlFor="thumbnailPicturePencil">
          <Icon icon="custom:pencil" className="h-6 w-6 cursor-pointer" />
        </label>
      </div>

      <div className="absolute -top-[2px] right-4">
        <PetBadge value={props.valueOrigin} setValue={props.setOrigin} />
      </div>
    </div>
  );
};

export default AddThumbnail;
