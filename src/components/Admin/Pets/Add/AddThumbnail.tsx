import { Icon } from "@iconify/react";
import PetBadge from "./PetBadge";

interface AddThumbnailProps {
  thumbnail: string | null;
  onChangeThumbnail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  origin: string;
  setOrigin: React.Dispatch<React.SetStateAction<string>>;
}

const AddThumbnail = ({
  thumbnail,
  onChangeThumbnail,
  origin,
  setOrigin,
}: AddThumbnailProps) => {
  return (
    <div className="relative flex aspect-square h-fit w-full flex-col">
      {thumbnail === null ? (
        <div className="flex h-full w-full items-center justify-center rounded-3xl border-2 border-accent-gray-variant bg-white drop-shadow-sm">
          <input
            type="file"
            id="thumbnailPicturePlus"
            accept=".jpeg, .jpg, .png"
            multiple={false}
            className="hidden"
            onChange={onChangeThumbnail}
          />
          <label
            htmlFor="thumbnailPicturePlus"
            className="flex h-full w-full items-center justify-center"
          >
            <Icon
              icon="custom:plus"
              className="h-[30%] w-[30%] cursor-pointer"
            />
          </label>
        </div>
      ) : (
        <div className="flex h-full w-full">
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="h-full w-full rounded-3xl border-2 border-accent-gray-variant object-cover object-center drop-shadow-sm"
          ></img>
        </div>
      )}

      <div
        className={
          "absolute bottom-5 right-5 " +
          (thumbnail === null ? "hidden" : "visible")
        }
      >
        <input
          type="file"
          id="thumbnailPicturePencil"
          accept=".jpeg, .jpg, .png"
          multiple={false}
          className="hidden"
          onChange={onChangeThumbnail}
        />
        <label htmlFor="thumbnailPicturePencil">
          <Icon
            icon="custom:pencil"
            className="h-8 w-8 cursor-pointer rounded-full bg-white p-1 shadow-md hover:brightness-90"
          />
        </label>
      </div>

      <div className="absolute -top-[2px] right-4">
        <PetBadge value={origin} setValue={setOrigin} isEditabled />
      </div>
    </div>
  );
};

export default AddThumbnail;
