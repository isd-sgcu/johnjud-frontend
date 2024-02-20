import { Icon } from "@iconify/react";

interface AddSmallPictureProps {
  value: File[];
  setValue: React.Dispatch<React.SetStateAction<(File | null)[]>>;
}

const AddSmallPicture = (props: AddSmallPictureProps) => {
  const { value, setValue } = props;
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length !== 0) {
      const newFiles: File[] = Array.from(selectedFiles);
      setValue((prev) => {
        return [...prev, ...Array.from(newFiles)];
      });
    }
  };

  const handleDeleteImage = (index: number) => {
    setValue((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div className="flex w-full snap-x flex-row gap-4 overflow-x-auto scroll-smooth pb-2">
      {Array.from(value).map((picture, index) => {
        return (
          <div
            className="relative flex aspect-square w-[60%] max-w-48 flex-shrink-0 snap-start items-center justify-center bg-white"
            key={index}
          >
            <img
              src={URL.createObjectURL(picture)}
              alt={picture.name}
              className="h-full w-full rounded-3xl border-2  border-accent-gray-variant border-opacity-50 object-cover object-center"
            />
            <div className="absolute right-0 top-0 p-2">
              <button
                onClick={() => handleDeleteImage(index)}
                className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-full bg-white p-1 shadow-md hover:brightness-90"
              >
                <Icon icon="ph:trash" className="h-5 w-5 text-accent-red" />
              </button>
            </div>
          </div>
        );
      })}

      <input
        id="smallPicture"
        className="hidden w-full"
        type="file"
        accept=".jpeg, .jpg, .png"
        multiple={true}
        onChange={handleOnChange}
      />
      <label
        htmlFor="smallPicture"
        className="flex aspect-square w-[60%] max-w-48 flex-shrink-0 cursor-pointer snap-start items-center justify-center rounded-3xl border-2 border-accent-gray-variant bg-white drop-shadow-sm"
      >
        <Icon icon="custom:plus" className="h-[30%] w-[30%]" />
      </label>
    </div>
  );
};

export default AddSmallPicture;
