import TextareaAutosize from "react-autosize-textarea";
import { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';

const EditInfo = (props) => {
    const ref = {
        gender: useRef(null),
        breed: useRef(null),
        age: useRef(null),
        nature: useRef(null),
        vaccine: useRef(null),
        sterile: useRef(null),
    }
    const pencilRef = useRef(null);
    const [enableEdit, setEnableEdit] = useState(false);
    const handleOnClick = () => {
        setEnableEdit(!enableEdit);
    }
    const handleOnBlur = (event) => {
        const currentFocus = event.relatedTarget;
        let stillFocus = false;
        for (const val of Object.values(ref)) {
            if (val && currentFocus === val.current) {
                stillFocus = true;
                break;
            }
        }
        if (!currentFocus || (!stillFocus && currentFocus !== pencilRef.current)) {
            setEnableEdit(false);
        }
    }
    const handleOnChange = (event, tag: string) => {
        const updateValue = { [tag]: event.target.value };
        props.setValue({
            ...props.value,
            ...updateValue
        });
    }
    const handleOnClickButton = (tag: string) => {
        if (enableEdit) {
            const updateValue = { [tag]: !props.value[tag] };
            props.setValue({
                ...props.value,
                ...updateValue
            });
        }
    }
    // useEffect(() => {
    //     console.log(props.value);
    // }, [props.value]);

    return (
        <div className="flex flex-col w-full bg-white px-[9%] pt-4 pb-12 lg:py-7 border-2 border-[#D9D9D9] border-opacity-50">
            <div className="flex flex-col w-fit relative">
                <div className="flex flex-row items-center">
                    <span className="text-3xl text-primary font-bold">รายละเอียด</span>
                    <div ref={pencilRef} tabIndex={0}>
                        <Icon icon="custom:pencil" color="#C81425" className="flex flex-none ml-2 w-8 h-8 cursor-pointer" onClick={handleOnClick} />
                    </div>
                </div>
                <div className="bg-primary h-[2px]" />
            </div>

            <div className="flex flex-col mt-5 space-y-3">
                {/* Gender */}
                <div className="flex flex-row items-start">
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="w-5 h-5 flex flex-none">
                            <path d="M16.5625 10.0148C17.4254 10.0148 18.125 9.31528 18.125 8.45233C18.125 7.58939 17.4254 6.88983 16.5625 6.88983C15.6996 6.88983 15 7.58939 15 8.45233C15 9.31528 15.6996 10.0148 16.5625 10.0148Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.4375 10.0148C4.30044 10.0148 5 9.31528 5 8.45233C5 7.58939 4.30044 6.88983 3.4375 6.88983C2.57456 6.88983 1.875 7.58939 1.875 8.45233C1.875 9.31528 2.57456 10.0148 3.4375 10.0148Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.3153 12.1909C13.5314 11.7555 12.9511 11.0282 12.7007 10.1672C12.5307 9.5824 12.1755 9.06868 11.6885 8.70309C11.2015 8.33749 10.609 8.13983 10 8.13983C9.39104 8.13983 8.79853 8.33749 8.31154 8.70309C7.82454 9.06868 7.46936 9.58248 7.29939 10.1672C7.04896 11.0283 6.46861 11.7555 5.68471 12.1909C5.12003 12.497 4.69479 13.0086 4.49713 13.6198C4.29947 14.2309 4.34456 14.8946 4.62305 15.4734C4.90153 16.0522 5.39205 16.5017 5.99294 16.7286C6.59382 16.9555 7.25898 16.9425 7.85054 16.6923C9.22787 16.1275 10.7721 16.1275 12.1495 16.6923C12.7411 16.9428 13.4064 16.956 14.0074 16.7291C14.6085 16.5022 15.0992 16.0527 15.3777 15.4738C15.6563 14.8949 15.7013 14.231 15.5035 13.6197C15.3057 13.0085 14.8802 12.4968 14.3153 12.1909Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.8125 6.26483C13.6754 6.26483 14.375 5.56528 14.375 4.70233C14.375 3.83939 13.6754 3.13983 12.8125 3.13983C11.9496 3.13983 11.25 3.83939 11.25 4.70233C11.25 5.56528 11.9496 6.26483 12.8125 6.26483Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.1875 6.26483C8.05044 6.26483 8.75 5.56528 8.75 4.70233C8.75 3.83939 8.05044 3.13983 7.1875 3.13983C6.32455 3.13983 5.625 3.83939 5.625 4.70233C5.625 5.56528 6.32455 6.26483 7.1875 6.26483Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-1 text-primary">เพศ:</span>
                    </div>
                    <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.gender} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.gender} onChange={(event) => handleOnChange(event, "gender")} />
                </div>

                {/* Breed */}
                <div className="flex flex-row items-start">
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10.3446 14.9158L14.2849 17.4122C14.7886 17.7313 15.4139 17.2567 15.2644 16.6688L14.126 12.1905C14.0939 12.0657 14.0977 11.9345 14.137 11.8118C14.1762 11.6892 14.2492 11.5801 14.3477 11.497L17.8811 8.55615C18.3453 8.16973 18.1057 7.39922 17.5092 7.36051L12.8949 7.06103C12.7706 7.05215 12.6514 7.00815 12.5511 6.93414C12.4509 6.86014 12.3737 6.75918 12.3286 6.64302L10.6076 2.30919C10.5609 2.1859 10.4777 2.07975 10.3692 2.00485C10.2606 1.92995 10.1319 1.88983 10 1.88983C9.86813 1.88983 9.73938 1.92995 9.63085 2.00485C9.52232 2.07975 9.43914 2.1859 9.39236 2.30919L7.6714 6.64302C7.62631 6.75918 7.54914 6.86014 7.4489 6.93414C7.34865 7.00815 7.22944 7.05215 7.10515 7.06103L2.49078 7.36051C1.89429 7.39922 1.65466 8.16973 2.11894 8.55615L5.65232 11.497C5.75079 11.5801 5.82383 11.6892 5.86305 11.8118C5.90226 11.9345 5.90606 12.0657 5.874 12.1905L4.81824 16.3436C4.63889 17.0491 5.38929 17.6186 5.99369 17.2357L9.65539 14.9158C9.75837 14.8503 9.87792 14.8154 10 14.8154C10.1221 14.8154 10.2416 14.8503 10.3446 14.9158V14.9158Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-1 text-primary">พันธุ์:</span>
                    </div>
                    <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.breed} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.breed} onChange={(event) => handleOnChange(event, "breed")} />
                </div>

                {/* Age */}
                <div className="flex flex-row items-start">
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M3.125 6.88983H16.875M13.75 1.88983V4.38983M6.25 1.88983V4.38983M3.75 3.13983H16.25C16.5952 3.13983 16.875 3.41965 16.875 3.76483V16.2648C16.875 16.61 16.5952 16.8898 16.25 16.8898H3.75C3.40482 16.8898 3.125 16.61 3.125 16.2648V3.76483C3.125 3.41965 3.40482 3.13983 3.75 3.13983Z" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-1 text-primary">อายุ:</span>
                    </div>
                    <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.age} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.age} onChange={(event) => handleOnChange(event, "age")} />
                </div>

                {/* Nature */}
                <div className="flex flex-row items-start">
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M6.25 15.9523C6.25 17.1605 5.27062 18.1398 4.0625 18.1398C2.85438 18.1398 1.875 17.1605 1.875 15.9523C1.875 14.7442 2.85438 13.7648 4.0625 13.7648C5.27062 13.7648 6.25 14.7442 6.25 15.9523ZM6.25 15.9523V5.01483L16.25 2.51483V13.4523M16.25 13.4523C16.25 14.6605 15.2706 15.6398 14.0625 15.6398C12.8544 15.6398 11.875 14.6605 11.875 13.4523C11.875 12.2442 12.8544 11.2648 14.0625 11.2648C15.2706 11.2648 16.25 12.2442 16.25 13.4523ZM16.25 6.26483L6.25 8.76483" stroke="#08878E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-1 text-primary">อายุ:</span>
                    </div>
                    <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.nature} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.nature} onChange={(event) => handleOnChange(event, "nature")} />
                </div>

                <div className="flex flex-row flex-wrap">
                    {/* Vaccine */}
                    <div className={"flex flex-row mr-4 mb-4 w-fit px-2 py-1 items-center rounded-full " + ((props.value["vaccine"]) ? "bg-[#C81425] " : "bg-[#808086] bg-opacity-50 ") + (enableEdit ? "cursor-pointer" : "")} onClick={() => handleOnClickButton("vaccine")} onBlur={handleOnBlur} ref={ref.vaccine} tabIndex={1}>
                        <div className={"mr-1 " + ((props.value["vaccine"]) ? "" : "rounded-full p-1 bg-[#808086]")}>
                            <Icon icon="ph:eyedropper" className={((props.value["vaccine"]) ? "w-6 h-6" : "w-4 h-4")} color="white" />
                        </div>
                        <div className={"font-semibold " + ((props.value["vaccine"]) ? "text-white" : "text-[#808086]")}>ฉีดวัคซีนแล้ว</div>
                    </div>

                    {/* Sterile */}
                    <div className={"flex flex-row w-fit mb-4 pl-2 pr-5 py-1 items-center rounded-full " + ((props.value["sterile"]) ? "bg-[#C81425] " : "bg-[#808086] bg-opacity-50 ") + (enableEdit ? "cursor-pointer" : "")} onClick={() => handleOnClickButton("sterile")} onBlur={handleOnBlur} ref={ref.sterile} tabIndex={2}>
                        <div className={"mr-1 " + ((props.value["sterile"]) ? "" : "rounded-full p-1 bg-[#808086]")}>
                            <Icon icon="ph:medal" className={((props.value["sterile"]) ? "w-6 h-6" : "w-4 h-4")} color="white" />
                        </div>
                        <div className={"font-semibold " + ((props.value["sterile"]) ? "text-white" : "text-[#808086]")}>ทำหมันแล้ว</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EditInfo;