import React, { ReactNode } from "react";

interface SubmitButtonProps {
  text: ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full text-nowrap rounded-2xl bg-primary px-28 py-3 text-2xl font-semibold text-white focus:outline-none"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
