import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonWrapper from "./ButtonWrapper";

const Info = () => {
    const admin = true;

    return ( 
        <div className="bg-white shadow shadow-zinc-300 flex flex-col items-center p-6 w-full xl:w-fit xl:rounded-2xl xl:-ml-2">
            <div className="flex flex-col xl:flex-row xl:gap-10 h-full xl:pl-28">
                <div className="text-primary w-80">
                    <div className="text-2xl font-bold underline underline-offset-8 mb-4 flex justify-between">
                        <span>รายละเอียด</span>
                        {admin ?
                            <Icon
                                icon="mynaui:pencil"
                                color="#c81425"
                                className="h-fit m-2 w-6"/>
                            : <Icon 
                                icon="ph:heart" 
                                color="#c81425" 
                                className="w-8 h-fit xl:hidden"/>
                        }
                    </div>
                    <div className="flex gap-3 mb-3">
                        <span className="flex items-center">
                            <Icon icon="ph:paw-print" color="#08878e" className="mr-2"/>
                            เพศ:
                        </span>
                        <span className="text-black font-semibold">
                            ผู้
                        </span>
                    </div>
                    <div className="flex gap-3 mb-3">
                        <span className="flex items-center">
                            <Icon icon="ph:star" color="#08878e" className="mr-2"/>
                            พันธ์ุ:
                        </span>
                        <span className="text-black font-semibold">
                            เเลบราดอร์
                        </span>
                    </div>
                    <div className="flex gap-3 mb-3">
                        <span className="flex items-center">
                            <Icon icon="carbon:calendar" color="#08878e" className="mr-2"/>
                            อายุ:
                        </span>
                        <span className="text-black font-semibold">
                            3 ปี 1 เดือน
                        </span>
                    </div>
                    <div className="flex gap-3 mb-3">
                        <span className="flex items-center">
                            <Icon icon="ph:music-notes" color="#08878e" className="mr-2"/>
                            นิสัย:
                        </span>
                        <span className="text-black font-semibold">
                            ดุร้าย
                        </span>
                    </div>
                </div>
                <div className="w-[0.1px] bg-zinc-300 shadow-2xl shadow-zinc-500 hidden xl:inline-block" ></div>
                <ButtonWrapper/>
            </div>
        </div>
     );
}
 
export default Info;