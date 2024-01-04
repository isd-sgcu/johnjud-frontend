import { Icon } from "@iconify/react";
import { tv } from "tailwind-variants";

interface PetFilterIconProps {
  isOpen?: boolean;
  onClick?: () => void;
}

const petFilterIcon = tv({
  slots: {
    base: "bg-accent-red flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full hover:brightness-90",
    icon: "h-6 w-6",
  },
  variants: {
    isOpen: {
      true: "brightness-90",
      false: "brightness-100",
    },
  },
});

const PetFilterIcon = ({ isOpen, onClick }: PetFilterIconProps) => {
  const { base, icon } = petFilterIcon({ isOpen });

  return (
    <button type="button" onClick={onClick} className={base()}>
      <Icon icon="@custom:md:cat-white" className={icon()} />
    </button>
  );
};

export default PetFilterIcon;
