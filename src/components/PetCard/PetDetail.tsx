import { Icon } from "@iconify/react";

interface PetDetailProps {
  icon: string;
  description: string;
}

const PetDetail = (props: PetDetailProps) => {
  return (
    <div className="mb-1 flex items-center gap-2 text-base font-normal text-accent-gray">
      <Icon icon={props.icon} className="relative h-5 w-5" />
      <span>{props.description}</span>
    </div>
  );
};

export default PetDetail;
