import { Icon } from "@iconify/react";
import React from "react";

interface DividerProps {
  variant: "primary" | "accent-yellow";
}

const Divider: React.FC<DividerProps> = ({ variant }) => {
  const getClassName = () => {
    return variant === "primary" ? "text-primary" : "text-accent-yellow";
  };

  return (
    <div className="flex items-center justify-center">
      <Icon
        icon="ph:paw-print"
        className={`h-6 w-6 ${getClassName()} md:h-9 md:w-9`}
      />
    </div>
  );
};

export default Divider;
