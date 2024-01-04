import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = ({isAdmin} : {isAdmin: boolean}) => {

    return (  
        <div className="flex flex-col gap-2.5 xl:justify-between font-semibold text-white">
            <div className="xl:flex justify-between"> 
                <div className="flex gap-4 xl:flex-col xl:gap-4 xl:items-start">
                    <div className="bg-secondary flex gap-2 items-center justify-center py-1 px-3 rounded-full shadow-zinc-300 shadow-[0_0_2px_1px]">
                        <Icon
                            icon="ph:eyedropper-bold"
                            color="white"
                            className="w-4 h-4"
                        />
                        <span>ฉีดวัคซีนแล้ว</span>
                    </div>
                    <div className="bg-secondary flex gap-2 items-center justify-centerpy-1 py-1 px-3 rounded-full shadow-zinc-300 shadow-[0_0_2px_1px]">
                        <Icon
                            icon="ph:medal"
                            color="white"
                            className="w-4 h-4"
                        />
                        <span>ทําหมันแล้ว</span>
                    </div>
                </div>
                {!isAdmin && <Icon
                    icon="ph:heart"
                    color="#c81425"
                    className="w-8 h-fit hidden xl:inline-block cursor-pointer"
                />}
            </div>
            {
                isAdmin ? 
                    <div className="flex justify-between xl:gap-8">
                        <div className="bg-primary py-2 px-6 rounded-2xl flex items-center shadow-zinc-300 shadow-[0_0_2px_1px]">
                            ถูกรับเลี้ยงแล้ว
                        </div>
                        <button className="bg-secondary flex gap-2 items-center text-lg font-normal py-2 px-6 rounded-2xl shadow-zinc-300 shadow-[0_0_2px_1px]">
                            <Icon 
                                icon="lucide:trash-2" 
                                color="white"
                            />
                            <span>ลบโพสต์</span>
                        </button>
                     </div>
                    : 
                    <button className="bg-primary text-white py-2 rounded-2xl shadow-zinc-300 shadow-[0_0_2px_1px] xl:px-24">รับเลี้ยงเลย</button>
            }
        </div>
    );
}
 
export default ButtonWrapper;