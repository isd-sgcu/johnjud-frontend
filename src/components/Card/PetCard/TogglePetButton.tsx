import { useMemo } from "react";
import { tv } from "tailwind-variants";

interface ToggleProps {
  visibility: boolean;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const toggleSwitch = tv({
  slots: {
    base: "flex w-24 cursor-pointer items-center rounded-[20px] p-2 flex-shrink-0",
    switchStyle:
      "min-h-9 min-w-9 transform rounded-full bg-white transition duration-500",
    textStyle:
      "text-[10px] text-center text-white transition duration-500 font-normal ",
  },
  variants: {
    variant: {
      enabled: {
        base: "bg-teal-600",
        switchStyle: "transform translate-x-11",
        textStyle: "transfrom -translate-x-8",
      },
      disabled: {
        base: "bg-accent-red",
      },
    },
  },
});

const TogglePetButton = ({ visibility, onClick }: ToggleProps) => {
  const { base, switchStyle, textStyle } = toggleSwitch();

  const variant = useMemo(() => {
    return visibility ? "enabled" : "disabled";
  }, [visibility]);

  const text = useMemo(() => {
    return visibility ? "มองเห็น" : "ปิดการมองเห็น";
  }, [visibility]);

  return (
    <button
      className={base({ variant })}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
      }}
    >
      <div className={switchStyle({ variant })}></div>
      <p className={textStyle({ variant })}>{text}</p>
    </button>
  );
};

export default TogglePetButton;
