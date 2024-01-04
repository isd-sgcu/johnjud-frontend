import { Icon } from "@iconify/react";

interface PetFilterIconProps {
  onClick?: () => void;
}

const PetFilterIcon = ({ onClick }: PetFilterIconProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-accent-red hover:brightness-90"
    >
      <Icon icon="@custom:md:cat-white" className="h-6 w-6" />
    </button>
  );
};

export default PetFilterIcon;
