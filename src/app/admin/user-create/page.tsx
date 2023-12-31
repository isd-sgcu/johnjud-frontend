import MainLayout from "../../../layouts/MainLayout";
import { useRef, useState, useEffect } from 'react';
import EditName from "../../../components/admin/user-create/EditName";

const userCreate = () => {
    const [name, setName] = useState("...กรุณาใส่ชื่อ")

    return (
        <div className="flex flex-col w-screen">
            <div className="flex justify-between items-center px-[10%] py-2 overflow-clip">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none" className="flex flex-none">
                    <path d="M11 21L1 11L11 1" stroke="#08878E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <EditName value={name} setValue={setName}/>
            </div>
            <div className="flex w-1/5 h-1 bg-primary mx-[10%] self-end"/>
        </div>
    );
}

export default userCreate;

export const Layout = MainLayout;
