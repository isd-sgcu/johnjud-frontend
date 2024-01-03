import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = ({isAdmin} : {isAdmin: boolean}) => {

    return (  
        <div className="flex flex-col justify-between gap-2.5 font-semibold text-white">
            <div className="flex gap-4">
                <div className="bg-secondary flex gap-2 items-center justify-center py-1 px-3 rounded-full">
                    <Icon 
                        icon="ph:eyedropper-bold" 
                        color="white" 
                        className="w-4 h-4"
                    />
                    <span>ฉีดวัคซีนแล้ว</span>
                </div>
                <div className="bg-secondary flex gap-2 items-center justify-centerpy-1 px-3 rounded-full">
                    <Icon 
                        icon="ph:medal" 
                        color="white" 
                        className="w-4 h-4"
                    />
                    <span>ทําหมันแล้ว</span>
                </div>
            </div>
            {
                isAdmin ? 
                    <div className="flex justify-between">
                        <div className="bg-primary py-2 px-6 rounded-2xl flex items-center">
                            ถูกรับเลี้ยงแล้ว
                        </div>
                        <button className="bg-secondary flex gap-2 items-center text-lg font-normal py-2 px-6 rounded-2xl ">
                            <Icon 
                                icon="lucide:trash-2" 
                                color="white"
                            />
                            <span>ลบโพสต์</span>
                        </button>
                     </div>
                    : 
                    <button className="bg-primary text-white py-2 rounded-2xl">รับเลี้ยงเลย</button>
            }
        </div>
    );
}
 
export default ButtonWrapper;