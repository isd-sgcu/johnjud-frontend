import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonWrapper from "./ButtonWrapper";

const Info = ({isAdmin} : {isAdmin: boolean}) => {

    return ( 
        <div className="bg-white shadow-[0_0_4px_1px] shadow-zinc-300 flex flex-col items-center p-6 w-full">
            <div className="flex flex-col gap-2.5">
                <div className="text-primary w-80 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="border-b-2 border-primary flex gap-2 items-center">
                            <p className="text-2xl font-bold">รายละเอียด</p>
                            {
                                isAdmin && 
                                    <Icon
                                        icon="mynaui:pencil"
                                        color="#c81425"
                                        className="w-8 h-8"
                                    />
                            }
                        </div>
                        {
                            !isAdmin &&
                                <Icon 
                                    icon="ph:heart" 
                                    color="#c81425" 
                                    className="w-8 h-fit xl:hidden"
                                />
                        }
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-3">
                            <Icon icon="ph:paw-print" color="#08878e"/>
                            เพศ:
                        </span>
                        <span className="text-black font-semibold">
                            ผู้
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-3">
                            <Icon icon="ph:star" color="#08878e"/>
                            พันธ์ุ:
                        </span>
                        <span className="text-black font-semibold">
                            เเลบราดอร์
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-3">
                            <Icon icon="carbon:calendar" color="#08878e"/>
                            อายุ:
                        </span>
                        <span className="text-black font-semibold">
                            3 ปี 1 เดือน
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-3">
                            <Icon icon="ph:music-notes" color="#08878e"/>
                            นิสัย:
                        </span>
                        <span className="text-black font-semibold">
                            ดุร้าย
                        </span>
                    </div>
                </div>
                <div className="w-[0.1px] bg-zinc-300 shadow-2xl shadow-zinc-500 hidden xl:inline-block" ></div>
                <ButtonWrapper isAdmin={isAdmin}/>
            </div>
        </div>
     );
}
 
export default Info;