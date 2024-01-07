import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

type info = {
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
    if ((!stillFocus && currentFocus && currentFocus === pencilRef.current)) {
      
    } else if (!currentFocus || (!stillFocus && currentFocus !== pencilRef.current)) {
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
      <div className="flex w-full flex-col lg:rounded-2xl border-2 border-[#D9D9D9] border-opacity-50 bg-white px-6 py-6 lg:py-8 lg:pl-[12.5%] lg:pr-0">
        {/* Header */}
        <div className="flex flex-row items-center justify-between lg:pr-[5%]">
          <div className="flex flex-col relative">
            <span className="text-3xl font-bold text-primary">
              รายละเอียด
            </span>
            <div className="h-[2px] w-full bg-primary" />
          </div>

          <div ref={pencilRef} tabIndex={0} className="ml-2 ">
            <Icon
              icon={((enableEdit) ? "ph:floppy-disk" : "custom:pencil")}
              className={"flex h-6 w-6 flex-none cursor-pointer text-accent-red"}
              onClick={handleOnClick}
            />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:divide-x-2 mt-4">
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
                <Icon
                  icon="carbon:calendar"
                  className="h-5 w-5 text-primary"
                />
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
                <Icon
                  icon="ph:music-notes"
                  className="h-5 w-5 text-primary"
                />
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

          <div className="mt-3 flex flex-col lg:justify-between">
            <div className="flex flex-row flex-wrap items-center gap-4 lg:flex-col justify-center">
              {/* Vaccine */}
              <div
                className={
                  "flex h-fit w-fit flex-row items-center rounded-full px-2 py-1 select-none " +
                  (showInfo["vaccine"]
                    ? "bg-[#C81425] "
                    : "bg-[#808086] bg-opacity-50 ") +
                  (enableEdit ? "cursor-pointer" : "")
                }
                onClick={() => handleOnClickButton("vaccine")}
                onBlur={handleOnBlur}
                ref={ref.vaccine}
                tabIndex={1}
              >
                <div
                  className={
                    "mr-1 " +
                    (showInfo["vaccine"]
                      ? ""
                      : "rounded-full bg-[#808086] p-1")
                  }
                >
                  <Icon
                    icon="ph:eyedropper"
                    className={showInfo["vaccine"] ? "h-6 w-6" : "h-4 w-4"}
                    color="white"
                  />
                </div>
                <div
                  className={
                    "font-semibold " +
                    (showInfo["vaccine"] ? "text-white" : "text-[#808086]")
                  }
                >
                  ฉีดวัคซีนแล้ว
                </div>
              </div>

              {/* Sterile */}
              <div
                className={
                  "flex h-fit w-fit flex-row items-center rounded-full px-2 py-1 select-none " +
                  (showInfo["sterile"]
                    ? "bg-[#C81425] "
                    : "bg-[#808086] bg-opacity-50 ") +
                  (enableEdit ? "cursor-pointer" : "")
                }
                onClick={() => handleOnClickButton("sterile")}
                onBlur={handleOnBlur}
                ref={ref.sterile}
                tabIndex={2}
              >
                <div
                  className={
                    "mr-1 " +
                    (showInfo["sterile"]
                      ? ""
                      : "rounded-full bg-[#808086] p-1")
                  }
                >
                  <Icon
                    icon="ph:medal"
                    className={showInfo["sterile"] ? "h-6 w-6" : "h-4 w-4"}
                    color="white"
                  />
                </div>
                <div
                  className={
                    "ml-1 pr-2 font-semibold " +
                    (showInfo["sterile"] ? "text-white" : "text-[#808086]")
                  }
                >
                  ทำหมันแล้ว
                </div>
              </div>
            </div>

            {/* large Post Buttom */}
            <div
              className="mt-6 hidden w-full cursor-pointer px-[10%] lg:flex"
              onClick={props.onSubmit}
            >
              <div className="w-full rounded-2xl bg-[#C81425] py-2 text-center text-2xl font-semibold text-white select-none">
                โพสต์เลย
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small Post Button */}
      <div
        className="mt-6 flex w-full cursor-pointer px-[10%] lg:hidden"
        onClick={props.onSubmit}
      >
        <div className="w-full rounded-2xl bg-[#C81425] py-2 text-center text-2xl font-semibold text-white">
          โพสต์เลย
        </div>
      </div>
    </div>
  );
};

export default EditInfoAndSubmit;
