import { Icon } from "@iconify/react";

interface ToggleButtonProps {
  id: string;
  text: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleInput = ({ id, text, checked, onChange }: ToggleButtonProps) => {
  return (
    <label
      htmlFor={id}
      className="flex w-28 cursor-pointer flex-row justify-between rounded-full bg-accent-red bg-opacity-80 px-4 py-2 text-white"
    >
      <span>{text}</span>
      <div className="flex h-6 w-6 flex-col items-center justify-center rounded-full bg-white">
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className="h-5 w-5 rounded-full transition-all duration-150 peer-checked:bg-accent-red peer-checked:bg-opacity-80">
          <Icon icon="bi:check" className="h-5 w-5 text-white" />
        </div>
      </div>
    </label>
  );
};

export default ToggleInput;
