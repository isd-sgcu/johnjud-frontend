import { Icon } from "@iconify/react";
import React from "react";

interface DividerProps {
  variant: "primary" | "accent-yellow";
}

const Divider: React.FC<DividerProps> = ({ variant }) => {
  return (
    <div className="flex items-center justify-center ">
      <Icon
        icon="ph:paw-print"
        className={`h-6 w-6 text-${variant} md:h-9 md:w-9`}
      />
    </div>
  );
};

export default Divider;
