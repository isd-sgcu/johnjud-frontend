interface ToggleButtonProps {
  id: string;
  text: string;
}

const ToggleInput = ({ id, text }: ToggleButtonProps) => {
  return (
    <label
      htmlFor={id}
      className="bg-accent-red flex w-28 cursor-pointer flex-row justify-between rounded-full bg-opacity-80 px-4 py-2 text-white"
    >
      <span>{text}</span>
      <div className="flex h-6 w-6 flex-col items-center justify-center rounded-full bg-white">
        <input type="checkbox" id={id} className="peer sr-only" />
        <div className="peer-checked:bg-accent-red h-4 w-4 rounded-full transition-all duration-150 peer-checked:bg-opacity-80"></div>
      </div>
    </label>
  );
};

export default ToggleInput;
