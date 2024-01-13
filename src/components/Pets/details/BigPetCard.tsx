import petImg from "@/assets/details/pet.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "@/components/Container";
import EditName from "@/components/Admin/Pets/Add/EditName";
import { useState } from "react";
import EditText from "@/components/Admin/Pets/Add/EditText";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PetBadge from "@/components/Admin/Pets/Add/PetBadge";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";


const BigPetCard = ({ 
  isAdmin 
} : { 
  isAdmin: boolean 
}) => {
  const [name, setName] = useState('ไรลีย์');
  const [text, setText] = useState("ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์ รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน");
  const slideImages = [
    petImg,
    petImg,
    petImg,
    petImg,
  ]
  const [petFrom, setPetFrom] = useState("fromClub");
  const [images, setImages] = useState<File[]>([]);
  const convertImgToFile = async (imgFilePath : string) => {
    const response = await fetch(imgFilePath);
    const blob = await response.blob();
    const file =  new File([blob], 'image.jpg', { type: blob.type });
    setImages([
      file,
      file,
      file
    ])
  };
    
  convertImgToFile(petImg);

  return (
    <Container className="flex flex-col gap-8">
      {/* header */}
      <div className="flex items-center justify-between text-primary">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          className="h-8 w-8 cursor-pointer"
        />
        <div className="xl:hidden">
          <EditName value={name} setValue={setName} isAdmin={isAdmin} /> 
        </div>
      </div>

      {/* thumbnail */}
      <div className="mx-auto flex flex-col items-center justify-between gap-8 xl:h-80 xl:w-[80rem] xl:flex-row xl:items-start">
        <div className="relative w-80">
          <div className="flex flex-col items-end relative">
            <Carousel
              renderArrowPrev={(clickHandler: () => void) => {
                return (
                    <button
                      className="absolute left-0 top-0 z-10 h-full rounded-l-2xl px-2"
                      onClick={clickHandler}
                    >
                      <Icon
                        icon="ph:caret-left"
                        className="h-10 w-10 text-4xl text-white z-10"
                      />
                    </button>
                );
              }}
              renderArrowNext={(clickHandler: () => void) => {
                return (
                    <button
                      className="absolute right-0 top-0 h-full rounded-r-2xl px-2"
                      onClick={clickHandler}
                    >
                      <Icon
                        icon="ph:caret-right"
                        className="h-10 w-10 text-4xl text-white z-10"
                      />
                    </button>
                );
              }}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {slideImages.map((item, index) => (
                <div key={index} className="relative">
                  <img src={item} className="w-full rounded-2xl" />
                </div>
              ))}
            </Carousel>
            <PetBadge value={petFrom} setValue={setPetFrom} />
          </div>
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
      {isAdmin && <AddSmallPicture value={images} setValue={setImages}/>}
    </Container>
  );
};

export default BigPetCard;
