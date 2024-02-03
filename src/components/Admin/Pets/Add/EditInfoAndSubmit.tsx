import Button from "@/components/Button";
import { Pet } from "@/types/pets";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DateInputInfo from "./DateInputInfo";
import OptionInputInfo from "./OptionInputInfo";
import TextInputInfo from "./TextInputInfo";
import ToggleInputInfo from "./ToggleInputInfo";

export type info = {
  gender: string;
  age: string;
  nature: string;
  vaccine: boolean;
  sterile: boolean;
};

interface EditInfoAndSubmitProps {
  value: Pet;
  setValue: React.Dispatch<React.SetStateAction<Pet>>;
  onSubmit: (pet: Pet) => void;
  isAdmin: boolean;
  isFav?: boolean;
  changeSpecificField: (tag: string, data: string | boolean) => void;
  handleFavPressed?: () => void;
  id?: string;
}

const EditInfoAndSubmit = (props: EditInfoAndSubmitProps) => {
  const [enableEdit, setEnableEdit] = useState(false);

  const handleOnClick = () => {
    setEnableEdit(!enableEdit);
  };

  const handleOnChange = (
    event: React.FormEvent<HTMLTextAreaElement>,
    tag: string
  ) => {
    const element = event.target as HTMLInputElement;
    const updateValue = { [tag]: element.value };
    props.setValue({
      ...props.value,
      ...updateValue,
    });
  };

  const handleOnClickButton = (tag: keyof Pet) => {
    if (enableEdit) {
      const updateValue = { [tag]: !props.value[tag] };
      props.setValue({
        ...props.value,
        ...updateValue,
      });
    }
  };

  const handleOnPost = () => {
    if (enableEdit) {
      handleOnClick();
      props.onSubmit(props.value);
    }
  };

  return (
    <div className="flex w-full flex-col">
      {/* EditInfo */}
      <div className="flex w-full flex-col border-2 border-accent-gray-variant border-opacity-50 bg-white px-6 py-6 lg:rounded-r-2xl lg:py-8 lg:pl-[12.5%] lg:pr-0">
        {/* Header */}
        <div className="flex flex-row items-center justify-between lg:pr-[5%]">
          <div className="relative flex flex-col">
            <span className="text-3xl font-bold text-primary">รายละเอียด</span>
            <div className="h-[2px] w-full bg-primary" />
          </div>

          {props.isAdmin ? (
            <div tabIndex={0} className="ml-2 ">
              <Icon
                icon={enableEdit ? "ph:floppy-disk" : "custom:pencil"}
                className={
                  "flex h-6 w-6 flex-none cursor-pointer text-accent-red"
                }
                onClick={handleOnClick}
              />
            </div>
          ) : (
            <div className="ml-2">
              <Icon
                icon={
                  props.isFav
                    ? "ph:heart-straight-fill"
                    : "ph:heart-straight-bold"
                }
                className="h-6 w-6 cursor-pointer text-accent-red"
                onClick={props.handleFavPressed}
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col lg:grid lg:grid-cols-2 lg:divide-x-2">
          <div className="flex flex-col space-y-3 lg:space-y-4 lg:pr-8">
            {/* Gender */}
            <OptionInputInfo
              text="เพศ:"
              value={props.value.gender === "male" ? "ผู้" : "เมีย"}
              enableEdit={enableEdit}
              changeSpecificField={props.changeSpecificField}
              icon={"ph:paw-print"}
            />

            {/* Age */}
            <DateInputInfo
              text="อายุ:"
              date={props.value.birthdate}
              enableEdit={enableEdit}
              changeSpecificField={props.changeSpecificField}
              icon={"carbon:calendar"}
            />

            {/* Nature */}
            <TextInputInfo
              text="นิสัย:"
              value={props.value.habit}
              enableEdit={enableEdit}
              onChange={(event) => handleOnChange(event, "habit")}
              icon={"ph:music-notes"}
            />
          </div>

          <div className="mt-3 flex flex-col lg:justify-between lg:px-[10%]">
            <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col">
              {/* Vaccine */}
              <ToggleInputInfo
                value={props.value["is_vaccinated"]}
                onClick={() => handleOnClickButton("is_vaccinated")}
                enableEdit={enableEdit}
                icon={"ph:eyedropper"}
                text={"ฉีดวัคซีนแล้ว"}
              />

              {/* Sterile */}
              <ToggleInputInfo
                value={props.value["is_sterile"]}
                onClick={() => handleOnClickButton("is_sterile")}
                enableEdit={enableEdit}
                icon={"ph:medal"}
                text={"ทำหมันแล้ว"}
              />
            </div>

            {/* Post Buttom */}
            {props.isAdmin ? (
              <div>
                <Button
                  className="mt-6 w-full text-2xl font-semibold"
                  text="โพสต์เลย"
                  onClick={handleOnPost}
                  variant="accent-red"
                  rounded="full"
                />
              </div>
            ) : (
              <Link to={`/pets/${props.id}/adopt`}>
                <Button
                  className="mt-6 w-full text-2xl font-semibold"
                  text="รับเลี้ยงเลย"
                  variant="primary"
                  rounded="full"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfoAndSubmit;
