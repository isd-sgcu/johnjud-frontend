import { Icon } from "@iconify/react/dist/iconify.js";
import petImg from "../../assets/details/pet.svg";
import CustomButton from "../../components/details/CustomButton";

const BigPetCard = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-6 xl:grid-cols-[2rem_20rem_1fr] xl:grid-rows-[60px_40px_1fr] xl:gap-8 xl:pl-14 xl:pr-28">
      <div className="col-start-1 row-start-1 flex items-center xl:col-span-3">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          color="#08878E"
          width="24"
          height="24"
          className="cursor-pointer xl:h-8 xl:w-8"
        />
      </div>
      <div className="col-start-2 row-start-1 flex justify-end xl:col-start-3 xl:row-start-2 xl:h-fit xl:items-end xl:justify-start">
        <div className="w-fit">
          <div className="flex items-center xl:flex-row-reverse">
            {isAdmin && <CustomButton width={24} height={24} />}
            <p className="flex items-center justify-end text-3xl font-bold text-primary">
              ไรลีย์
            </p>
          </div>
          <div className="h-[2px] w-full rounded-full bg-primary"></div>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-start-2 flex justify-center xl:col-span-2 xl:row-span-2 xl:justify-end">
        <div className="relative">
          <img
            src={petImg}
            alt="pet-img"
            className="w-80 rounded-3xl bg-zinc-300 shadow shadow-zinc-300"
          />
          <div className="relative -top-[20.9rem] ml-40 flex h-0 justify-center">
            <Icon
              icon="material-symbols:bookmark"
              color="#08878e"
              className="h-24 w-fit"
            />
            <Icon
              icon="streamline:chess-knight"
              color="white"
              className="absolute top-4 h-4 w-4 "
            />
            <span className="absolute top-9 text-center text-xs text-white ">
              สัตว์เลี้ยง
              <br />
              ชมรม
              {isAdmin && (
                <Icon
                  icon="prime:arrow-right-arrow-left"
                  color="white"
                  className="inline-block h-4 w-4"
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-center xl:col-span-1 xl:col-start-3 xl:row-start-3 xl:justify-start">
        <div className="flex max-w-80 items-start justify-center rounded-3xl bg-white p-5 shadow xl:max-w-[48rem]">
          <span>
            ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์
            รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส
            เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน
            คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ
            จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน
          </span>
          {isAdmin && (
            <div className="m-2 h-fit">
              <CustomButton width={22} height={22} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigPetCard;
