import TextareaAutosize from "react-autosize-textarea";
import { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';

const EditInfoAndSubmit = (props) => {
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

    return (
        <div className="flex flex-col w-full">
            {/* EditInfo */}
            <div className="flex flex-col w-full bg-white px-[9%] py-6 lg:py-8 lg:pl-[12.5%] lg:pr-0 border-2 rounded-2xl border-[#D9D9D9] border-opacity-50">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:divide-x-2">

                    <div className="flex flex-col space-y-3 lg:pr-8 lg:space-y-4">
                        {/* Header */}
                        <div className="flex flex-col w-fit relative">
                            <div className="flex flex-row items-center">
                                <span className="text-3xl text-primary font-bold">รายละเอียด</span>
                                <div ref={pencilRef} tabIndex={0}>
                                    <Icon icon="custom:pencil" color="#C81425" className="flex flex-none ml-2 w-8 h-8 cursor-pointer" onClick={handleOnClick} />
                                </div>
                            </div>
                            <div className="bg-primary h-[2px]" />
                        </div>

                        {/* Gender */}
                        <div className="flex flex-row items-start">
                            <div className="flex flex-row items-center">
                                <Icon icon="ph:paw-print" className='w-5 h-5' color="#08878E" />
                                <span className="ml-1 text-primary">เพศ:</span>
                            </div>
                            <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.gender} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.gender} onChange={(event) => handleOnChange(event, "gender")} />
                        </div>

                        {/* Breed */}
                        <div className="flex flex-row items-start">
                            <div className="flex flex-row items-center">
                                <Icon icon="ph:star" className='w-5 h-5' color="#08878E" />
                                <span className="ml-1 text-primary">พันธุ์:</span>
                            </div>
                            <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.breed} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.breed} onChange={(event) => handleOnChange(event, "breed")} />
                        </div>

                        {/* Age */}
                        <div className="flex flex-row items-start">
                            <div className="flex flex-row items-center">
                                <Icon icon="carbon:calendar" className='w-5 h-5' color="#08878E" />
                                <span className="ml-1 text-primary">อายุ:</span>
                            </div>
                            <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.age} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.age} onChange={(event) => handleOnChange(event, "age")} />
                        </div>

                        {/* Nature */}
                        <div className="flex flex-row items-start">
                            <div className="flex flex-row items-center">
                                <Icon icon="ph:music-notes" className='w-5 h-5' color="#08878E" />
                                <span className="ml-1 text-primary">นิสัย:</span>
                            </div>
                            <TextareaAutosize className={`w-full ml-3 px-2 font-semibold bg-white rounded-lg ${enableEdit ? "border border-[#D9D9D9]" : ""}`} value={props.value.nature} disabled={!enableEdit} onBlur={handleOnBlur} ref={ref.nature} onChange={(event) => handleOnChange(event, "nature")} />
                        </div>
                    </div>


                    <div className="flex flex-col lg:justify-between mt-3">
                        <div className="flex flex-row lg:flex-col flex-wrap items-center gap-4">
                            {/* Vaccine */}
                            <div className={"flex flex-row w-fit h-fit px-2 py-1 items-center rounded-full " + ((props.value["vaccine"]) ? "bg-[#C81425] " : "bg-[#808086] bg-opacity-50 ") + (enableEdit ? "cursor-pointer" : "")} onClick={() => handleOnClickButton("vaccine")} onBlur={handleOnBlur} ref={ref.vaccine} tabIndex={1}>
                                <div className={"mr-1 " + ((props.value["vaccine"]) ? "" : "rounded-full p-1 bg-[#808086]")}>
                                    <Icon icon="ph:eyedropper" className={((props.value["vaccine"]) ? "w-6 h-6" : "w-4 h-4")} color="white" />
                                </div>
                                <div className={"font-semibold " + ((props.value["vaccine"]) ? "text-white" : "text-[#808086]")}>ฉีดวัคซีนแล้ว</div>
                            </div>

                            {/* Sterile */}
                            <div className={"flex flex-row w-fit h-fit px-2 py-1 items-center rounded-full " + ((props.value["sterile"]) ? "bg-[#C81425] " : "bg-[#808086] bg-opacity-50 ") + (enableEdit ? "cursor-pointer" : "")} onClick={() => handleOnClickButton("sterile")} onBlur={handleOnBlur} ref={ref.sterile} tabIndex={2}>
                                <div className={"mr-1 " + ((props.value["sterile"]) ? "" : "rounded-full p-1 bg-[#808086]")}>
                                    <Icon icon="ph:medal" className={((props.value["sterile"]) ? "w-6 h-6" : "w-4 h-4")} color="white" />
                                </div>
                                <div className={"font-semibold ml-1 pr-2 " + ((props.value["sterile"]) ? "text-white" : "text-[#808086]")}>ทำหมันแล้ว</div>
                            </div>
                        </div>

                        {/* large Post Buttom */}
                        <div className="px-[10%] w-full mt-6 cursor-pointer hidden lg:flex" onClick={props.onSubmit}>
                            <div className="py-2 rounded-2xl bg-[#C81425] text-center text-white font-semibold text-2xl w-full">
                                โพสต์เลย
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* small Post Button */}
            <div className="flex px-[10%] w-full mt-6 cursor-pointer lg:hidden" onClick={props.onSubmit}>
                <div className="py-2 rounded-2xl bg-[#C81425] text-center text-white font-semibold text-2xl w-full">
                    โพสต์เลย
                </div>
            </div>
        </div>

    );
}

export default EditInfoAndSubmit;