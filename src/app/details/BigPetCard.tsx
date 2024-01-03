import { Icon } from "@iconify/react/dist/iconify.js";
import petImg from "../../assets/details/pet.svg";
import CustomButton from "../../components/details/customButton";

const BigPetCard = ({isAdmin} : {isAdmin: boolean}) => {

    return (  
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center px-6">
                <Icon 
                    icon="material-symbols-light:arrow-back-ios-new"  color="#08878E"
                    className="w-8 h-8"
                />
                <div className="flex items-center gap-2 text-primary border-b-2 border-primary">
                    {isAdmin && 
                        <Icon
                            icon="mynaui:pencil"
                            color="#c81425"
                            className="w-6 h-6 cursor-pointer"
                        />
                    }
                    <p className="text-[32px] font-bold"> 
                        ไรลีย์
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative">
                    <img
                        src={petImg}
                        alt="pet-img"
                        className="w-80 h-80 rounded-3xl shadow-zinc-300 bg-zinc-300 shadow-[0_0_4px_2px]"
                    />
                    <Icon
                        icon="mynaui:pencil"
                        color="#c81425"
                        className="w-6 h-6 cursor-pointer absolute bottom-4 right-4"
                    />
                </div>
            </div>

            <div className="px-6">
                <div className="xl:flex items-center gap-2 text-primary border-b-2 border-primary hidden">
                    {isAdmin && 
                        <Icon
                            icon="mynaui:pencil"
                            color="#c81425"
                            className="w-6 h-6 cursor-pointer"
                        />
                    }
                    <p className="text-[32px] font-bold"> 
                        ไรลีย์
                    </p>
                </div>
                <article className="flex px-5 py-3.5 shadow-zinc-300 shadow-[0_0_4px_0.5px] rounded-2xl border-zinc-300">
                    <p className="flex-1">
                        ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์ รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน
                    </p>
                    <Icon
                        icon="mynaui:pencil"
                        color="#c81425"
                        className="w-6 h-6 cursor-pointer"
                    />
                </article>
            </div>
        </div>
    );
}
 
export default BigPetCard;
