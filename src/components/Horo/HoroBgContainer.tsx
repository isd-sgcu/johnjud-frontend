import React from "react";

interface HoroBgContainerProps {
  children: React.ReactNode;
}

const HoroBgContainer: React.FC<HoroBgContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full  md:w-10/12 flex-col items-center justify-center space-y-5 rounded-2xl bg-accent-purple p-9 shadow-inner">
      {children}
    </div>
  );
};

export default HoroBgContainer;
