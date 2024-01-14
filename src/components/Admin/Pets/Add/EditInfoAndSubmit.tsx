import Button from "@/components/Button";
import { usePageParams } from "@/hooks/usePageParams";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextInputInfo from "./TextInputInfo";
import ToggleInputInfo from "./ToggleInputInfo";

export type info = {
  gender: string;
  breed: string;
  age: string;
  nature: string;
  vaccine: boolean;
  sterile: boolean;
};

interface EditInfoAndSubmitProps {
  value: info;
  setValue: React.Dispatch<React.SetStateAction<info>>;
  onSubmit: (petinfo: info) => void;
  isAdmin: boolean;
}

const EditInfoAndSubmit = (props: EditInfoAndSubmitProps) => {
  const id = usePageParams(["id"]);
  const ref = {
    gender: useRef(null),
    breed: useRef(null),
    age: useRef(null),
    nature: useRef(null),
    vaccine: useRef(null),
    sterile: useRef(null),
  };
  const pencilRef = useRef(null);
  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnClick = () => {
    if (enableEdit) {
      props.setValue(showInfo);
    } else {
      setShowInfo(props.value);
    }
    setEnableEdit(!enableEdit);
  };

  const [showInfo, setShowInfo] = useState<info>(props.value);

  const handleOnBlur = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLDivElement>
  ) => {
    const currentFocus = event.relatedTarget;
    let stillFocus = false;
    for (const val of Object.values(ref)) {
      if (val && currentFocus === val.current) {
        stillFocus = true;
        break;
      }
    }
    if (!stillFocus && currentFocus && currentFocus === pencilRef.current) {
    } else if (
      !currentFocus ||
      (!stillFocus && currentFocus !== pencilRef.current)
    ) {
      setShowInfo(props.value);
      setEnableEdit(false);
    }
  };
  const handleOnChange = (
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
            <div ref={pencilRef} tabIndex={0} className="ml-2 ">
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
                icon="ph:heart-straight-bold"
                className="h-6 w-6 text-accent-red"
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col lg:grid lg:grid-cols-2 lg:divide-x-2">
          <div className="flex flex-col space-y-3 lg:space-y-4 lg:pr-8">
            {/* Gender */}
            <TextInputInfo
              text="เพศ:"
              value={showInfo.gender}
              enableEdit={enableEdit}
              onBlur={handleOnBlur}
              onChange={(event) => handleOnChange(event, "gender")}
              inputRef={ref.gender}
              icon={"ph:paw-print"}
            />

            {/* Breed */}
            <TextInputInfo
              text="พันธุ์:"
              value={showInfo.breed}
              enableEdit={enableEdit}
              onBlur={handleOnBlur}
              onChange={(event) => handleOnChange(event, "breed")}
              inputRef={ref.breed}
              icon={"ph:star"}
            />

            {/* Age */}
            <TextInputInfo
              text="อายุ:"
              value={showInfo.age}
              enableEdit={enableEdit}
              onBlur={handleOnBlur}
              onChange={(event) => handleOnChange(event, "age")}
              inputRef={ref.age}
              icon={"carbon:calendar"}
            />

            {/* Nature */}
            <TextInputInfo
              text="นิสัย:"
              value={showInfo.nature}
              enableEdit={enableEdit}
              onBlur={handleOnBlur}
              onChange={(event) => handleOnChange(event, "nature")}
              inputRef={ref.nature}
              icon={"ph:music-notes"}
            />
          </div>

          <div className="mt-3 flex flex-col lg:justify-between lg:px-[10%]">
            <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col">
              {/* Vaccine */}
              <ToggleInputInfo
                value={showInfo["vaccine"]}
                onClick={() => handleOnClickButton("vaccine")}
                onBlur={handleOnBlur}
                inputRef={ref.vaccine}
                enableEdit={enableEdit}
                icon={"ph:eyedropper"}
                text={"ฉีดวัคซีนแล้ว"}
              />

              {/* Sterile */}
              <ToggleInputInfo
                value={showInfo["sterile"]}
                onClick={() => handleOnClickButton("sterile")}
                onBlur={handleOnBlur}
                inputRef={ref.sterile}
                enableEdit={enableEdit}
                icon={"ph:medal"}
                text={"ทำหมันแล้ว"}
              />
            </div>

            {/* Post Buttom */}
            {props.isAdmin ? (
              <Button
                className="mt-6 w-full text-2xl font-semibold"
                text="โพสต์เลย"
                onClick={() => props.onSubmit(showInfo)}
                variant="accent-red"
                rounded="full"
              />
            ) : (
              <Link to={`/pets/${id}/adopt`}>
                <Button
                  className="mt-6 w-full text-2xl font-semibold"
                  text="รับเลี้ยงเลย"
                  onClick={() => {}}
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
