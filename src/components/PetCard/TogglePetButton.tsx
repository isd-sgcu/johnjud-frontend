interface TogglePetButtonProps {
  isVisible: boolean;
  rounded?: "none" | "2xl";
  className?: string;
  onChange: () => void;
}

const ToggleSwitch = ({ isVisible, onChange }: TogglePetButtonProps) => {
  const toggleClass = "transfrom translate-x-2";
  return (
    <div
      onClick={onChange}
      className={`flex min-h-10 w-24 transform cursor-pointer items-center rounded-[20px] p-2 ${
        isVisible ? "bg-teal-600" : "bg-accent-red"
      }`}
    >
      <div
        className={`text-center text-xs text-white  ${
          isVisible ? "block" : "hidden"
        }`}
      >
        มองเห็น
      </div>
      <div
        className={`min-h-9 min-w-9 transform rounded-full bg-white transition duration-500 ${
          isVisible ? toggleClass : null
        }`}
      ></div>

      <div
        className={`text-center text-xs text-white ${
          isVisible ? "hidden" : "block"
        }`}
      >
        ปิดการมองเห็น
      </div>
    </div>
  );
};

export default ToggleSwitch;
