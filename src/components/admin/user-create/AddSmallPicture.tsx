import { Icon } from '@iconify/react';

const AddSmallPicture = (props) => {
    return (
        <div className="flex flex-row mt-6 pb-6 lg:mt-10 w-full overflow-x-auto scroll-smooth snap-x space-x-4">
            {
                props.value.map((picture) => {
                    return <div className='flex flex-shrink-0 w-[60%] max-w-48 aspect-square snap-start items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white'>

                    </div>
                })
            }

            <div className="flex flex-shrink-0 w-[60%] max-w-48 aspect-square snap-start items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm ">
                <Icon icon="custom:plus" className="w-[30%] h-[30%]" />
            </div>
        </div>
    );
}

export default AddSmallPicture;