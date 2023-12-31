import { useEffect, useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import TextareaAutosize from "react-autosize-textarea";

const EditText = (props) => {
    const ref = useRef(null);

    const [enableEdit, setEnableEdit] = useState(false);
    const handleOnClick = () => {
        setEnableEdit(true)
    }
    const handleOnBlur = () => {
        setEnableEdit(false)
    }
    const handleOnChange = (event) => {
        props.setValue(event.target.value)
    }

    useEffect(() => {
        if (enableEdit && ref.current) {
            ref.current.focus();
            const inputLength = ref.current.value.length;
            ref.current.setSelectionRange(inputLength, inputLength);
        }
    }, [enableEdit]);
    return (
        <div className="relative flex w-full min-h-[60vw] mt-4">
            <TextareaAutosize value={props.value} className="w-full px-5 py-4 border-2 border-[#D9D9D9] border-opacity-50 bg-white rounded-3xl drop-shadow-sm" disabled={!enableEdit} onBlur={handleOnBlur} ref={ref} onChange={handleOnChange} placeholder="ใส่ข้อความตรงนี้..." />
            <div className="absolute top-4 right-5">
                <PencilIcon onClick={handleOnClick} />
            </div>
        </div>
    );
}

export default EditText;