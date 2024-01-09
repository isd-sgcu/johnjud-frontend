import React from 'react'

interface HoroBgContainerProps {
    children: React.ReactNode;
}

const HoroBgContainer: React.FC<HoroBgContainerProps> = ({ children }) => {
  return (
    <div className= "flex justify-center items-center flex-col bg-accent-purple space-y-5 p-10 shadow-inner w-10/12 rounded-2xl">
        {children}
    </div>
  )
}

export default HoroBgContainer