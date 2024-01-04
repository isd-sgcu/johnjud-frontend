import { useState } from "react";

interface NumberInputProps {
  id: string;
  text: string;
}

const NumberInput = ({ id, text }: NumberInputProps) => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="bg-accent-red flex cursor-pointer flex-row justify-between gap-2 rounded-full bg-opacity-80 px-4 py-2 text-white">
      <label htmlFor={id}>{text}</label>
      <div className="flex flex-row">
        <button
          type="button"
          onClick={() => setValue((prev) => Math.max(prev - 1, 0))}
          className="px-2 font-semibold hover:brightness-90"
        >
          -
        </button>
        <input
          type="tel"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-12 rounded-lg px-2 text-center text-black outline-none"
        />
        <button
          type="button"
          onClick={() => setValue((prev) => Math.min(prev + 1, 100))}
          className="px-2 font-semibold hover:brightness-90"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
