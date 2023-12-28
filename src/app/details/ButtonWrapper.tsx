import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = () => {
    return (  
        <div className="mt-5">
            <div className="flex gap-2 mb-4 text-sm">
                <button className="bg-secondary flex gap-2 items-center text-white font-semibold py-1 px-3 rounded-3xl ">
                    <Icon icon="ph:eyedropper-bold" color="white" className="w-5 h-5"/>
                    <span>ฉีดวัคซีนแล้ว</span>
                </button>
                <button className="bg-secondary flex gap-2 items-center text-white font-semibold py-1 px-3 rounded-3xl ">
                    <Icon icon="ph:medal" color="white" className="w-5 h-5"/>
                    <span>ทําหมั่นแล้ว</span>
                </button>
            </div>
            <div className="flex gap-3">
                <button className="bg-primary flex gap-2 items-center text-white font-semibold py-2 px-7 text-sm rounded-2xl ">
                    เปลี่ยนเป็น
                    <br/>
                    ถูกรับเลี้ยงแล้ว
                </button>
                <button className="bg-secondary flex gap-2 items-center text-white py-1 px-6 rounded-2xl ">
                    <Icon icon="lucide:trash-2" color="white" />
                    <span>ลบโพสต์</span>
                </button>
            </div>
        </div>
    );
}
 
export default ButtonWrapper;