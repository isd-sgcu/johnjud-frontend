import { Icon } from "@iconify/react";
const PetFilterIcon = () => {
  return (
    <div className="bg-accent-red flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full hover:brightness-90">
      <Icon icon="@custom:md:cat-white" className="h-6 w-6" />
    </div>
  );
};

export default PetFilterIcon;
