import { Icon } from "@iconify/react/dist/iconify.js";
import petImg from "../../assets/details/pet.svg";

const BigPetCard = () => {
    const admin = true;

    return (  
        <div className="grid grid-cols-2 gap-3 xl:grid-cols-[2rem_20rem_1fr] xl:grid-rows-[60px_40px_1fr] xl:gap-8 xl:pr-28 xl:pl-14">
            <div className="col-start-1 flex items-center xl:col-span-3">
                <Icon icon="material-symbols-light:arrow-back-ios-new"  color="#08878E"  width="24" height="24" className="xl:w-8 xl:h-8 cursor-pointer"/>
            </div>
            <div className="col-start-2 flex justify-end xl:row-start-2 xl:justify-start xl:h-fit xl:items-end xl:col-start-3">
                <div className="w-fit">
                    <div className="flex items-center xl:flex-row-reverse">
                        {admin && <Icon icon="mynaui:pencil" color="#c81425" className="w-6 h-6"/>}
                        <p className="flex items-center justify-end text-3xl font-bold text-primary"> 
                            ไรลีย์
                        </p>
                    </div>
                    <div className="bg-primary w-full h-[2px] rounded-full"></div>
                </div>
            </div>
            <div className="w-full col-start-1 row-start-2 col-span-2 flex justify-center xl:col-span-2 xl:row-span-2 xl:justify-end">
                <div className="relative">
                    <img 
                        src={petImg} 
                        alt="pet-img" 
                        className="rounded-3xl shadow shadow-zinc-300 bg-zinc-300 w-80" />
                    <div className="relative flex justify-center -top-[20.9rem] left-24 h-0">
                        <Icon
                            icon="material-symbols:bookmark"
                            color="#08878e"
                            className="w-fit h-24"
                        />
                        <Icon
                            icon="streamline:chess-knight"
                            color="white"
                            className="h-4 w-4 absolute top-4 "
                        />
                        <span className="text-white text-center text-xs absolute top-9 " >
                            สัตว์เลี้ยง
                            <br />
                            ชมรม
                            {admin && <Icon
                                icon="prime:arrow-right-arrow-left" color="white"
                                className="w-4 h-4 inline-block"
                            />}
                        </span>
                    </div>
                </div>
                
            </div>
            <div className="col-span-2 flex justify-center xl:col-span-1 xl:row-start-3 xl:col-start-3 xl:justify-start">
                <div className="shadow p-5 rounded-3xl bg-white flex justify-center items-start max-w-80 xl:max-w-[48rem]">
                    <span>
                        ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์ รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน
                    </span>
                    {
                        admin && <Icon icon="mynaui:pencil" color="#c81425" className="xl:w-16 h-fit m-2 w-40"/>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default BigPetCard;
