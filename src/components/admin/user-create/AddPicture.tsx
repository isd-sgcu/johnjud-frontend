import { useRef, useState, useEffect } from 'react';
import PlusIcon from './PlusIcon';

const AddPicture = (props) => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex w-full aspect-square items-center justify-center border-2 border-[#D9D9D9] bg-white rounded-3xl drop-shadow-sm '>
                <PlusIcon />
            </div>
        </div>
    );
}

export default AddPicture;