import { useRef, useState, useEffect } from 'react';
import TextareaAutosize from 'react-autosize-textarea';


function EditName(props) {
    const ref = useRef(null);

    const handleClickEdit = () => {
        setEnableName(true)
    };
    const handleOnBlur = () => {
        setEnableName(false)
    }

    const [enableName, setEnableName] = useState(false);
    const handleOnChange = (event) => {
        props.setValue(event.target.value);
    }

    useEffect(() => {
        if (enableName && ref.current) {
            ref.current.focus();
            const inputLength = ref.current.value.length;
            ref.current.setSelectionRange(inputLength, inputLength);
        }
    }, [enableName]);
    return (
        <div className='flex w-full pl-6'>
            <div className={`flex flex-row items-center justify-end w-full ${enableName ? "hidden" : "visible"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className="flex flex-none mr-1" onClick={() => handleClickEdit()}>
                    <path d="M5.95208 18.2022L0.7977 13.0478M9.75 4.00012L15 9.25012M5.68934 18.2501H1.5C1.30109 18.2501 1.11032 18.1711 0.96967 18.0304C0.829018 17.8898 0.75 17.699 0.75 17.5001V13.3108C0.75 13.2123 0.769399 13.1148 0.80709 13.0238C0.844781 12.9328 0.900026 12.8501 0.96967 12.7804L12.2197 1.53045C12.3603 1.38979 12.5511 1.31078 12.75 1.31078C12.9489 1.31078 13.1397 1.38979 13.2803 1.53045L17.4697 5.71979C17.6103 5.86044 17.6893 6.0512 17.6893 6.25012C17.6893 6.44903 17.6103 6.63979 17.4697 6.78045L6.21967 18.0304C6.15003 18.1001 6.06735 18.1553 5.97635 18.193C5.88536 18.2307 5.78783 18.2501 5.68934 18.2501Z" stroke="#C81425" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="flex font-bold text-3xl text-right w-[calc(100% - 1rem)] text-wrap text-primary break-all">{props.value}</span>
            </div>
            <TextareaAutosize value={props.value} onChange={handleOnChange} className={`flex font-bold text-3xl text-right text-wrap break-all text-primary resize-none w-full ${enableName ? "visible" : "hidden"}`} disabled={!enableName} onBlur={() => handleOnBlur()} ref={ref} rows={1} />
        </div>
    );
}

export default EditName;