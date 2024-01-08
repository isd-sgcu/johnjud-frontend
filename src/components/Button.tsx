import { Icon } from "@iconify/react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  text: string;
  icon?: string;

  variant: "primary" | "accent-red" | "accent-purple" | "white" | "disabled";
  rounded?: "none" | "2xl" | "full";

  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const button = tv({
  slots: {
    base: "px-6 py-2 disabled:cursor-not-allowed hover:brightness-90",
    containerStyle: "flex flex-row justify-center items-center gap-2",
    iconStyle: "h-6 w-6",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-primary text-white",
        iconStyle: "text-white",
      },
      "accent-red": {
        base: "bg-accent-red text-white",
        iconStyle: "text-white",
      },
      "accent-purple": {
        base: "bg-accent-purple text-white",
        iconStyle: "text-white",
      },
      white: {
        base: "bg-white text-accent-gray",
        iconStyle: "text-accent-gray",
      },
      disabled: {
        base: "bg-accent-light-gray-variant text-accent-gray",
        iconStyle: "text-accent-gray",
      },
    },
    rounded: {
      none: {
        base: "rounded-none",
      },
      "2xl": {
        base: "rounded-2xl",
      },
      full: {
        base: "rounded-full",
      },
    },
  },
});

const Button = ({
  text,
  icon,
  variant,
  rounded = "none",
  className,
  onClick,
}: ButtonProps) => {
  const { base, containerStyle, iconStyle } = button({ variant, rounded });

  return (
    <button
      type="button"
      onClick={onClick}
      className={base({ class: className })}
      disabled={variant == "disabled"}
    >
      <div className={containerStyle()}>
        {icon && <Icon icon={icon} className={iconStyle()} />}
        <div>{text}</div>
      </div>
    </button>
  );
};

export default Button;
