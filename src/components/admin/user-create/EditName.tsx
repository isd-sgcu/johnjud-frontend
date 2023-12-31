import { useRef, useState, useEffect } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import PencilIcon from './PencilIcon';

const EditName = (props) => {
    const ref = useRef(null);

    const handleClickEdit = () => {
        setEnableEdit(true)
    };
    const handleOnBlur = () => {
        setEnableEdit(false)
    }

    const [enableEdit, setEnableEdit] = useState(false);
    const handleOnChange = (event) => {
        props.setValue(event.target.value);
    }

    useEffect(() => {
        if (enableEdit && ref.current) {
            ref.current.focus();
            const inputLength = ref.current.value.length;
            ref.current.setSelectionRange(inputLength, inputLength);
        }
    }, [enableEdit]);
    return (
        <div className='flex w-full pl-6'>
            <div className={`flex flex-row items-center justify-end w-full ${enableEdit ? "hidden" : "visible"}`}>
                <PencilIcon onClick={() => handleClickEdit()}/>
                <span className="flex font-bold text-3xl text-right w-[calc(100% - 1rem)] text-wrap text-primary break-all">{props.value}</span>
            </div>
            <TextareaAutosize value={props.value} onChange={handleOnChange} className={`flex font-bold text-3xl text-right text-wrap break-all text-primary resize-none w-full rounded-lg p-2 focus:outline-[#D9D9D9] ${enableEdit ? "visible" : "hidden"}`} disabled={!enableEdit} onBlur={() => handleOnBlur()} ref={ref} rows={1} />
        </div>
    );
}

export default EditName;