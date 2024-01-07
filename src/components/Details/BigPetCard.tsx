import { Icon } from "@iconify/react/dist/iconify.js";
import petImg from "@/assets/details/pet.svg";
import PetImgList from "./PetImgList";

const BigPetCard = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between px-6 xl:px-12">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          className="h-8 w-8 text-primary"
        />
        <div className="flex items-center gap-2 text-primary xl:hidden">
          {isAdmin && (
            <Icon
              icon="mynaui:pencil"
              className="h-6 w-6 cursor-pointer text-accent-red"
            />
          )}
          <p className="text-4xl font-bold border-b-2 border-primary">ไรลีย์</p>
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
            <div className= "bg-white rounded-full p-1 overflow-visible w-8 h-8 absolute bottom-4 right-4">
              <Icon
                icon="mynaui:pencil"
                className=" h-6 w-6 cursor-pointer text-accent-red"
              />
            </div>
          }
        </div>
        <div className="flex flex-col items-start gap-8 px-6 xl:h-full xl:flex-1">
          <div className="hidden xl:flex xl:flex-row-reverse xl:items-center xl:gap-2 ">
            {isAdmin && (
              <Icon
                icon="mynaui:pencil"
                className="h-8 w-8 cursor-pointer text-accent-red"
              />
            )}
            <p className="text-4xl font-bold border-b-2 border-primary text-primary">ไรลีย์</p>
          </div>
          <article className="flex w-full justify-start gap-1 rounded-2xl border-zinc-300  bg-white p-4 shadow-[0_0_4px_0.5px] shadow-zinc-300 xl:flex-1">
            <p className="max-w-[43.75rem] flex-1 xl:text-xl">
              ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์
              รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต
              โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา
              อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี
              แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก
              เวเฟอร์เดโมเจ๊วีนโอวัลติน
            </p>
            {isAdmin && 
            <Icon
              icon="mynaui:pencil"
              className="h-6 w-6 cursor-pointer text-accent-red xl:hidden"
            />}
          </article>
        </div>
      </div>
      {isAdmin && <PetImgList />}
    </div>
  );
};

export default BigPetCard;
