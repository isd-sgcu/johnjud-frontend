import { Icon } from "@iconify/react/dist/iconify.js";

interface CustomButtonProps {
  width: number;
  height: number;
}

const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  return (
    <div>
      <Icon
        icon="mynaui:pencil"
        color="#c81425"
        className="h-fit cursor-pointer"
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default CustomButton;
