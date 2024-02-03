import { Icon } from "@iconify/react";

interface PetBadgeProps {
  value: boolean;
  isEditabled?: boolean;
  setValue: (data: boolean) => void;
}

const PetBadge = (props: PetBadgeProps) => {
  const handleOnClick = () => {
    if (!props.isEditabled) return;
    props.setValue(!props.value);
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
        icon={props.value ? "custom:primary:banner" : "custom:yellow:banner"}
        className="h-24 w-16"
      />
      <div
        className={
          "absolute top-[0.4rem] flex w-full flex-col items-center text-sm " +
          (props.value ? "text-white" : "text-black")
        }
      >
        <Icon
          icon={props.value ? "custom:chess" : "ph:paw-print"}
          className="h-6 w-6"
        />
        <div className="">สัตว์เลี้ยง</div>
        <div className="flex flex-row items-center">
          {props.value ? "ชมรม" : "ฝาก"}
          <Icon
            icon="fluent:arrow-swap-20-regular"
            className="h-5 w-5"
            hFlip={true}
            color={props.value ? "white" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default PetBadge;
