interface NumberInputProps {
  id: string;
  text: string;
  value: number;
  setValue: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  text,
  value,
  setValue
}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
  };
  const increment = () => setValue(Math.min(value + 1, 100));
  const decrement = () => setValue(Math.max(value - 1, 0));

  return (
    <div className="flex cursor-pointer flex-row justify-between gap-2 rounded-full bg-accent-red bg-opacity-80 px-4 py-2 text-white">
      <label htmlFor={id}>{text}</label>
      <div className="flex flex-row">
        <button
          type="button"
          onClick={decrement}
          className="px-2 font-semibold hover:brightness-90"
        >
          -
        </button>
        <input
          id={id}
          type="tel"
          value={value}
          onChange={handleChange}
          className="w-12 rounded-lg px-2 text-center text-black outline-none"
        />
        <button
          type="button"
          onClick={increment}
          className="px-2 font-semibold hover:brightness-90"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
