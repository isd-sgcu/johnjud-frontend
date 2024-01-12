import { Icon } from "@iconify/react";
import React, { useMemo } from "react";

interface DividerProps {
  variant: "primary" | "accent-yellow";
}

const Divider: React.FC<DividerProps> = ({ variant }) => {
  const getClassName = useMemo(() => {
    switch (variant) {
      case "primary":
        return "text-primary-500";
      case "accent-yellow":
        return "text-yellow-500";
      default:
        return "text-primary-500";
    }
  }, [variant]);

  return (
    <div className="flex items-center justify-center">
      <Icon
        icon="ph:paw-print"
        className={`h-6 w-6 ${getClassName} md:h-9 md:w-9`}
      />
    </div>
  );
};

export default Divider;
