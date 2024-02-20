import { Icon } from "@iconify/react";

interface AddSmallPictureProps {
  value: (File | null)[];
  setValue: React.Dispatch<React.SetStateAction<(File | null)[]>>;
}

const AddSmallPicture = (props: AddSmallPictureProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length !== 0) {
      const newFiles: File[] = Array.from(selectedFiles);
      props.setValue([...props.value, ...Array.from(newFiles)]);
    }
  };
  return (
    <div className="flex w-full snap-x flex-row gap-4 overflow-x-auto scroll-smooth pb-2">
      {Array.from(props.value).map((picture, index) => {
        return (
          <>
            {picture && (
              <div
                className="flex aspect-square w-[60%] max-w-48 flex-shrink-0 snap-start items-center justify-center bg-white"
                key={index}
              >
                <img
                  src={URL.createObjectURL(picture)}
                  alt={picture.name}
                  className="h-full w-full rounded-3xl border-2  border-accent-gray-variant border-opacity-50 object-cover object-center"
                />
              </div>
            )}
          </>
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

      <div className="flex w-[60%] max-w-48 flex-shrink-0" />
    </div>
  );
};

export default AddSmallPicture;
