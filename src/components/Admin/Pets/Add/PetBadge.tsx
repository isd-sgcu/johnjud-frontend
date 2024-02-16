import { Icon } from "@iconify/react";

interface PetBadgeProps {
  value: string;
  isEditabled?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PetBadge = (props: PetBadgeProps) => {
  const handleOnClick = () => {
    if (!props.isEditabled) return;
    props.setValue(props.value === "fromClub" ? "fromOutside" : "fromClub");
  };
  return (
    <div
      className={
        "relative flex w-full select-none " +
        (props.isEditabled ? "cursor-pointer" : "cursor-default")
      }
      onClick={handleOnClick}
    >
      <Icon
        icon={
          props.value === "fromClub"
            ? "custom:primary:banner"
            : "custom:yellow:banner"
        }
        className="h-24 w-16"
      />
      <div
        className={
          "absolute top-[0.4rem] flex w-full flex-col items-center text-sm " +
          (props.value === "fromClub" ? "text-white" : "text-black")
        }
      >
        <Icon
          icon={props.value === "fromClub" ? "custom:chess" : "ph:paw-print"}
          className="h-6 w-6"
        />
        <div className="">{props.value === "fromClub" ? "สัตว์เลี้ยง" : "สัตว์ฝาก"}</div>
        <div className="flex flex-row items-center">
          {props.value === "fromClub" ? "ชมรม" : "หาบ้าน"}
          <Icon
            icon="fluent:arrow-swap-20-regular"
            className="h-5 w-5"
            hFlip={true}
            color={props.value === "fromClub" ? "white" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default PetBadge;
