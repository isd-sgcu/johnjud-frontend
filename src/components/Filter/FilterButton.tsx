import { Icon } from "@iconify/react";
interface FilterButtonProps {
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

const FilterButton = ({ text, isOpen, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer flex-row items-center justify-between rounded-lg bg-accent-red p-3 text-white hover:brightness-90"
    >
      <div>{text}</div>
      <div>
        <Icon
          icon="ph:caret-down-fill"
          className={`h-4 w-4 ${
            isOpen && "-rotate-180 transform"
          } transition-all duration-150`}
        />
      </div>
    </button>
  );
};

export default FilterButton;
