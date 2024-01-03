import { Icon } from '@iconify/react';

interface AddSmallPictureProps {
    value: File[];
    setValue: React.Dispatch<React.SetStateAction<File[]>>;
}

const AddSmallPicture = (props: AddSmallPictureProps) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length !== 0) {
            const newFiles: File[] = Array.from(selectedFiles);
            props.setValue([
                ...props.value,
                ...Array.from(newFiles)
            ])
        }
    }
    return (
        <div className="flex flex-row mt-8 pb-4 lg:mt-10 w-full overflow-x-auto scroll-smooth snap-x gap-4">
            {
                Array.from(props.value).map((picture, index) => {
                    return (<div className='flex flex-shrink-0 w-[60%] max-w-48 aspect-square snap-start items-center justify-center bg-white' key={index}>
                        <img src={URL.createObjectURL(picture)} alt={picture.name} className='w-full h-full object-cover object-center  rounded-3xl border-2 border-[#D9D9D9] border-opacity-50' />
                    </div>)
                })
            }

            <input id="smallPicture" className='hidden w-full' type='file' accept=".jpeg, .jpg, .png" multiple={true} onChange={handleOnChange} />
            <label htmlFor='smallPicture' className='flex flex-shrink-0 w-[60%] max-w-48 aspect-square snap-start items-center justify-center rounded-3xl border-2 border-[#D9D9D9] bg-white drop-shadow-sm cursor-pointer'>
                <Icon icon="custom:plus" className="w-[30%] h-[30%]" />
            </label>

            <div className='flex flex-shrink-0 w-[60%] max-w-48' />
        </div>
    );
}

export default AddSmallPicture;