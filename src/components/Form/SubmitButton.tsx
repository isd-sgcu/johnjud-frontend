import React, { ReactNode } from 'react';

interface SubmitButtonProps {
    text: ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    text,
}: SubmitButtonProps) => {
    return (
        <button
            className='text-white text-2xl text-nowrap bg-primary rounded-3xl font-semibold w-full focus:outline-none py-3 px-28'
        >
            {text}
        </button>
    );
}

export default SubmitButton;
