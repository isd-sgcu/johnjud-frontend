import MainLayout from "../../../layouts/MainLayout";
import { useRef, useState, useEffect } from 'react';
import EditName from "../../../components/admin/user-create/EditName";
import AddPicture from "../../../components/admin/user-create/AddPicture";
import EditText from "../../../components/admin/user-create/EditText";

const userCreate = () => {
    const [name, setName] = useState("...กรุณาใส่ชื่อ")
    const [text, setText] = useState("");

    return (
        <div className="flex flex-col w-screen pt-6 lg:pt-8 pb-28 lg:pb-20">
            <div className="flex justify-between items-center px-[10%] py-2 overflow-clip">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none" className="flex flex-none">
                    <path d="M11 21L1 11L11 1" stroke="#08878E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <EditName value={name} setValue={setName}/>
            </div>
            <div className="flex w-1/5 h-1 bg-primary mx-[10%] self-end"/>
            <div className="flex px-[10%] pt-6 flex-col">
                <AddPicture />
                <EditText value={text} setValue={setText} />
            </div>
            
        </div>
    );
}

export default userCreate;

export const Layout = MainLayout;
