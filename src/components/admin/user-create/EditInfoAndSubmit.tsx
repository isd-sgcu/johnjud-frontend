import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
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
  onSubmit: () => void;
}

const EditInfoAndSubmit = (props: EditInfoAndSubmitProps) => {
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
      <div className="flex w-full flex-col border-2 border-[#D9D9D9] border-opacity-50 bg-white px-6 py-6 lg:rounded-2xl lg:py-8 lg:pl-[12.5%] lg:pr-0">
        {/* Header */}
        <div className="flex flex-row items-center justify-between lg:pr-[5%]">
          <div className="relative flex flex-col">
            <span className="text-3xl font-bold text-primary">รายละเอียด</span>
            <div className="h-[2px] w-full bg-primary" />
          </div>

          <div ref={pencilRef} tabIndex={0} className="ml-2 ">
            <Icon
              icon={enableEdit ? "ph:floppy-disk" : "custom:pencil"}
              className={
                "flex h-6 w-6 flex-none cursor-pointer text-accent-red"
              }
              onClick={handleOnClick}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col lg:grid lg:grid-cols-2 lg:divide-x-2">
          <div className="flex flex-col space-y-3 lg:space-y-4 lg:pr-8">
            {/* Gender */}
            <div className="flex flex-row items-start">
              <div className="flex flex-row items-center">
                <Icon icon="ph:paw-print" className="h-5 w-5 text-primary" />
                <span className="ml-1 text-primary">เพศ:</span>
              </div>
              <TextareaAutosize
                className={`ml-3 w-full rounded-lg bg-white px-2 font-semibold ${enableEdit ? "border border-[#D9D9D9]" : ""
                  }`}
                value={showInfo.gender}
                disabled={!enableEdit}
                onBlur={handleOnBlur}
                ref={ref.gender}
                onChange={(event) => handleOnChange(event, "gender")}
              />
            </div>

            {/* Breed */}
            <div className="flex flex-row items-start">
              <div className="flex flex-row items-center">
                <Icon icon="ph:star" className="h-5 w-5 text-primary" />
                <span className="ml-1 text-primary">พันธุ์:</span>
              </div>
              <TextareaAutosize
                className={`ml-3 w-full rounded-lg bg-white px-2 font-semibold ${enableEdit ? "border border-[#D9D9D9]" : ""
                  }`}
                value={showInfo.breed}
                disabled={!enableEdit}
                onBlur={handleOnBlur}
                ref={ref.breed}
                onChange={(event) => handleOnChange(event, "breed")}
              />
            </div>

            {/* Age */}
            <div className="flex flex-row items-start">
              <div className="flex flex-row items-center">
                <Icon icon="carbon:calendar" className="h-5 w-5 text-primary" />
                <span className="ml-1 text-primary">อายุ:</span>
              </div>
              <TextareaAutosize
                className={`ml-3 w-full rounded-lg bg-white px-2 font-semibold ${enableEdit ? "border border-[#D9D9D9]" : ""
                  }`}
                value={showInfo.age}
                disabled={!enableEdit}
                onBlur={handleOnBlur}
                ref={ref.age}
                onChange={(event) => handleOnChange(event, "age")}
              />
            </div>

            {/* Nature */}
            <div className="flex flex-row items-start">
              <div className="flex flex-row items-center">
                <Icon icon="ph:music-notes" className="h-5 w-5 text-primary" />
                <span className="ml-1 text-primary">นิสัย:</span>
              </div>
              <TextareaAutosize
                className={`ml-3 w-full rounded-lg bg-white px-2 font-semibold ${enableEdit ? "border border-[#D9D9D9]" : ""
                  }`}
                value={showInfo.nature}
                disabled={!enableEdit}
                onBlur={handleOnBlur}
                ref={ref.nature}
                onChange={(event) => handleOnChange(event, "nature")}
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col lg:justify-between lg:px-[10%]">
            <div className="flex flex-row flex-wrap justify-center gap-4 lg:flex-col">
              {/* Vaccine */}
              <ToggleInputInfo 
                type="vaccine"
                value={showInfo["vaccine"]}
                onClick={() => handleOnClickButton("vaccine")}
                onBlur={handleOnBlur}
                inputRef={ref.vaccine}
                enableEdit={enableEdit}
                icon={"ph:eyedropper"}
                text={"ฉีดวัคซีนแล้ว"} />
              
              {/* Sterile */}
              <ToggleInputInfo 
                type="sterile"
                value={showInfo["sterile"]}
                onClick={() => handleOnClickButton("sterile")}
                onBlur={handleOnBlur}
                inputRef={ref.sterile}
                enableEdit={enableEdit}
                icon={"ph:medal"}
                text={"ทำหมันแล้ว"} />
            </div>

            {/* Post Buttom */}
            <Button className="w-full text-2xl font-semibold mt-6" text="โพสต์เลย" onClick={props.onSubmit} variant="accent-red" rounded="2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfoAndSubmit;
