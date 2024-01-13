import petImg from "@/assets/details/pet.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import PetImgList from "./PetImgList";
import Container from "@/components/Container";
import EditName from "@/components/Admin/Pets/Add/EditName";
import { useState } from "react";
import EditText from "@/components/Admin/Pets/Add/EditText";


const BigPetCard = ({ 
  isAdmin 
} : { 
  isAdmin: boolean 
}) => {
  const [name, setName] = useState('ไรลีย์');
  const [text, setText] = useState("ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์ รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน");

  return (
    <Container className="flex flex-col gap-8">
      <div className="flex items-center justify-between text-primary">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          className="h-8 w-8 cursor-pointer"
        />
        <div className="xl:hidden">
          <EditName value={name} setValue={setName} isAdmin={isAdmin} /> 
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-8 xl:h-80 xl:w-[80rem] xl:flex-row xl:items-start">
        <div className="relative w-80">
          <img
            src={petImg}
            alt="pet-img"
            className="h-80 w-80 rounded-3xl bg-zinc-300 shadow-[0_0_4px_2px] shadow-zinc-300"
          />
          {isAdmin &&
            <div className="absolute bottom-4 right-4 h-8 w-8 overflow-visible rounded-full bg-white p-1">
              <Icon
                icon="mynaui:pencil"
                className=" h-6 w-6 cursor-pointer text-accent-red"
              />
            </div>
          }
        </div>
        <div className="flex flex-col items-start gap-8 w-full xl:h-full xl:flex-1">
          <div className="hidden xl:block">
            <EditName value={name} setValue={setName} isAdmin={isAdmin}/>           
          </div>
          <EditText value={text} setValue={setText} isAdmin={isAdmin} /> 
        </div>
      </div>
      {isAdmin && <PetImgList />}
    </Container>
  );
};

export default BigPetCard;
