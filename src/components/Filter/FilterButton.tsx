import { Icon } from "@iconify/react";
interface FilterButtonProps {
  text: string;
}

const FilterButton = ({ text }: FilterButtonProps) => {
  return (
    <div className="flex cursor-pointer flex-row items-center justify-between rounded-lg bg-accent-red p-3 text-white hover:brightness-90">
      <div>{text}</div>
      <div>
        <Icon icon="ph:code-simple" className="h-4 w-4 rotate-90 transform" />
      </div>
    </div>
  );
};

export default FilterButton;
