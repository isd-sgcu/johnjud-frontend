import { Icon } from "@iconify/react";

interface PetDetailProps {
  icon: string;
  description: string;
}

const PetDetail = (props: PetDetailProps) => {
  return (
    <div className="flex flex-row items-center justify-start gap-2 text-base font-normal text-accent-gray">
      <div>
        <Icon icon={props.icon} className="relative h-5 w-5" />
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export default PetDetail;
