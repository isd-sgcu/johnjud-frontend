import { Icon } from "@iconify/react";
import React, { useMemo } from "react";

interface DividerProps {
  variant: "primary" | "accent-yellow";
}

const Divider: React.FC<DividerProps> = ({ variant }) => {
  const getClassName = useMemo(() => {
    switch (variant) {
      case "primary":
        return "text-primary";
      case "accent-yellow":
        return "text-accent-yellow";
      default:
        return "text-primary";
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
