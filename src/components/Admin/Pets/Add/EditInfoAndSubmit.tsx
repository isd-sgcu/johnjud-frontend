import Button from "@/components/Button";
import { colorOption, genderOption, typeOption } from "@/utils/PetInfoOption";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateInputInfo from "./DateInputInfo";
import DropdownInputInfo, { OptionType } from "./DropdownInputInfo";
import TextInputInfo from "./TextInputInfo";
import ToggleInputInfo from "./ToggleInputInfo";

export type info = {
  type: "dog" | "cat" | "-";
  gender: "male" | "female" | "-";
  color: string;
  age: string;
  nature: string;
  vaccine: boolean;
  sterile: boolean;
};

interface EditInfoAndSubmitProps {
  value: info;
  setValue: React.Dispatch<React.SetStateAction<info>>;
  onSubmit: () => void;
  enableSubmit?: boolean;
  isAdmin: boolean;
  isFav?: boolean;
  handleFavPressed?: () => void;
  id?: string;
}

const EditInfoAndSubmit = (props: EditInfoAndSubmitProps) => {
  const [showInfo, setShowInfo] = useState<info>(props.value);
  const [enableEdit, setEnableEdit] = useState(false);

  const handleOnClickEdit = () => {
    if (enableEdit) {
      const addNoneInfo = { ...showInfo };
      if (addNoneInfo.age === "") addNoneInfo["age"] = "-";
      if (addNoneInfo.nature === "") addNoneInfo["nature"] = "-";
      props.setValue(addNoneInfo);
    } else {
      const removeEmptyInfo = { ...props.value };
      if (removeEmptyInfo.age === "-") removeEmptyInfo["age"] = "";
      if (removeEmptyInfo.nature === "-") removeEmptyInfo["nature"] = "";
      setShowInfo(removeEmptyInfo);
    }
    setEnableEdit(!enableEdit);
  };

  const handleOnChangeDate = (newDate: string, tag: keyof info) => {
    if (enableEdit) {
      const updateValue = { [tag]: newDate };
      setShowInfo({
        ...showInfo,
        ...updateValue,
      });
    }
  };
  const handleOnChangeDropDown = (
    selectedOption: OptionType | null,
    tag: keyof info
  ) => {
    if (enableEdit) {
      const updateValue = { [tag]: selectedOption ? selectedOption.value : "" };
      setShowInfo({
        ...showInfo,
        ...updateValue,
      });
    }
  };
  const handleOnChangeTextArea = (
    event: React.FormEvent<HTMLTextAreaElement>,
    tag: string
  ) => {
    const element = event.target as HTMLInputElement;
    const updateValue = { [tag]: element.value };
    setShowInfo({
      ...showInfo,
      ...updateValue,
    });
  };
  const handleOnClickButton = (tag: keyof info) => {
    if (enableEdit) {
      const updateValue = { [tag]: !showInfo[tag] };
      setShowInfo({
        ...showInfo,
        ...updateValue,
      });
    }
  };

  useEffect(() => setShowInfo(props.value), [props.value]);

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
            <div className="ml-2 ">
              <Icon
                icon={enableEdit ? "ph:floppy-disk" : "custom:pencil"}
                className={
                  "flex h-6 w-6 flex-none cursor-pointer text-accent-red"
                }
                onClick={handleOnClickEdit}
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
            <DropdownInputInfo
              text={"เพศ:"}
              icon={"ph:gender-intersex"}
              value={showInfo.gender}
              setValue={(newOption) =>
                handleOnChangeDropDown(newOption, "gender")
              }
              option={genderOption}
              enableEdit={enableEdit}
            />

            {/* Type */}
            <DropdownInputInfo
              text={"ชนิด:"}
              icon={"ph:paw-print"}
              value={showInfo.type}
              setValue={(newOption) =>
                handleOnChangeDropDown(newOption, "type")
              }
              option={typeOption}
              enableEdit={enableEdit}
            />

            {/* Type */}
            <DropdownInputInfo
              text={"สี:"}
              icon={"ph:palette"}
              value={showInfo.color}
              setValue={(newOption) =>
                handleOnChangeDropDown(newOption, "color")
              }
              option={colorOption}
              enableEdit={enableEdit}
              createable
            />

            {/* Age */}
            <DateInputInfo
              text="วันเกิด:"
              value={showInfo.age}
              onChange={(newDate) => handleOnChangeDate(newDate, "age")}
              enableEdit={enableEdit}
              icon={"carbon:calendar"}
            />

            {/* Nature */}
            <TextInputInfo
              text="นิสัย:"
              value={showInfo.nature}
              enableEdit={enableEdit}
              onChange={(event) => handleOnChangeTextArea(event, "nature")}
              icon={"ph:music-notes"}
            />
          </div>

          <div className="mt-3 flex flex-col lg:justify-between lg:px-[10%]">
            <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col">
              {/* Vaccine */}
              <ToggleInputInfo
                value={showInfo["vaccine"]}
                onClick={() => handleOnClickButton("vaccine")}
                enableEdit={enableEdit}
                icon={"ph:eyedropper"}
                text={"ฉีดวัคซีนแล้ว"}
              />

              {/* Sterile */}
              <ToggleInputInfo
                value={showInfo["sterile"]}
                onClick={() => handleOnClickButton("sterile")}
                enableEdit={enableEdit}
                icon={"ph:medal"}
                text={"ทำหมันแล้ว"}
              />
            </div>

            {/* Post Buttom */}
            {props.isAdmin ? (
              <div className="mt-6 flex w-full flex-col items-center gap-2">
                <p
                  className={`text-sm font-light text-accent-red ${
                    props.enableSubmit ? "hidden" : "visible"
                  }`}
                >
                  โปรดกรอกข้อมูลที่จำเป็นทั้งหมดก่อนโพสต์
                </p>
                <Button
                  className="w-full text-2xl font-semibold"
                  text="โพสต์เลย"
                  onClick={props.onSubmit}
                  variant={props.enableSubmit ? "accent-red" : "disabled"}
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
