import { Icon } from "@iconify/react";

interface PetDescriptionProps {
  icon: string;
  description: string;
}

const PetDescription = (props: PetDescriptionProps) => {
  return (
    <div className="mb-1 flex items-center gap-2 text-base font-normal text-zinc-500">
      <Icon icon={props.icon} className="relative h-5 w-5" />
      <span>{props.description}</span>
    </div>
  );
};

export default PetDescription;
