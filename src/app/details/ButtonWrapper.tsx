import { Icon } from "@iconify/react/dist/iconify.js";

const ButtonWrapper = () => {
    const admin = true;

    return (  
        <div className="mt-5 w-80 flex flex-col justify-between">
            <div className="flex gap-28 items-start">
                <div className="flex gap-2 mb-4 text-sm xl:flex-col">
                    <button className="bg-secondary flex gap-2 items-center justify-center text-white font-semibold py-1 px-3 rounded-3xl w-32 ">
                        <Icon icon="ph:eyedropper-bold" color="white" className="w-5 h-5"/>
                        <span>ฉีดวัคซีนแล้ว</span>
                    </button>
                    <button className="bg-secondary flex gap-2 items-center justify-center text-white font-semibold py-1 px-3 rounded-3xl w-32 ">
                        <Icon icon="ph:medal" color="white" className="w-5 h-5"/>
                        <span>ทําหมั่นแล้ว</span>
                    </button>
                </div>
                <Icon icon="ph:heart" color="#c81425" className="w-8 h-fit"/>
            </div>
            {admin ? <div className="flex gap-3 text-white">
                        <button className="bg-primary flex gap-2 items-center  font-semibold py-2 px-7 text-sm rounded-2xl ">
                            เปลี่ยนเป็น
                            <br/>
                            ถูกรับเลี้ยงแล้ว
                        </button>
                        <button className="bg-secondary flex gap-2 items-center text-white py-1 px-6 rounded-2xl ">
                            <Icon icon="lucide:trash-2" color="white" />
                            <span>ลบโพสต์</span>
                        </button>
                     </div>
                    : <button className="bg-primary text-white py-3 rounded-2xl">รับเลี้ยงเลย</button>
            }
        </div>
    );
}
 
export default ButtonWrapper;