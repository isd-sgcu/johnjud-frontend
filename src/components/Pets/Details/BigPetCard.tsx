import petImg from "@/assets/details/pet.svg";
import AddSmallPicture from "@/components/Admin/Pets/Add/AddSmallPicture";
import AddThumbnail from "@/components/Admin/Pets/Add/AddThumbnail";
import EditName from "@/components/Admin/Pets/Add/EditName";
import EditText from "@/components/Admin/Pets/Add/EditText";
import Container from "@/components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PetThumbnails from "../PetThumbnails";

const BigPetCard = ({ isAdmin }: { isAdmin: boolean }) => {
  const [name, setName] = useState("ไรลีย์");
  const [text, setText] = useState(
    "ทาวน์เทปวโรกาส ลิมูซีนเพลซบาร์บี้อุเทนเพลย์บอย ฟลุก เซอร์ไพรส์ รูบิคบึมเฝอมายาคติ ทรู ภคันทลาพาธ วาไรตี้ ท็อปบูตสงบสุขวอลนัต โนติส เบลอ แรงใจ เป่ายิงฉุบโยโย่ ภควัทคีตา อิเหนาช็อปนินจารูบิคคาสิโน คีตกวีบอกซ์โพลารอยด์ดิกชันนารี แกสโซฮอล์ผู้นำ จิ๊กโก๋ธัมโมคอร์รัปชั่น เหี่ยวย่นออทิสติก เวเฟอร์เดโมเจ๊วีนโอวัลติน"
  );
  const [petFrom, setPetFrom] = useState("fromClub");
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const imgs = [petImg, petImg, petImg, petImg];

  const convertImgToFile = async (imgFilePath: string) => {
    const response = await fetch(imgFilePath);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    setImages(() => [file, file, file]);
    setImage(file);
  };

  useEffect(() => {
    convertImgToFile(petImg);
  }, []);

  return (
    <Container className="flex flex-col gap-8">
      {/* header */}
      <div className="flex items-center justify-between text-primary">
        <Icon
          icon="material-symbols-light:arrow-back-ios-new"
          className="h-8 w-8 cursor-pointer"
        />
        <div className="md:hidden">
          <EditName value={name} setValue={setName} isAdmin={isAdmin} />
        </div>
      </div>

      {/* thumbnail */}
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 md:h-80 md:flex-row md:items-start">
        <div className="relative w-80">
          {!isAdmin ? (
            <PetThumbnails petImages={imgs} />
          ) : (
            <AddThumbnail
              valueOrigin={petFrom}
              setOrigin={setPetFrom}
              valueThumbnail={image}
              setThumbnail={setImage}
            />
          )}
        </div>

        <div className="flex w-full flex-col items-start gap-8 overflow-auto md:h-full md:flex-1">
          <div className="hidden md:block">
            <EditName value={name} setValue={setName} isAdmin={isAdmin} />
          </div>
          <EditText value={text} setValue={setText} isAdmin={isAdmin} />
        </div>
      </div>
      {isAdmin && <AddSmallPicture value={images} setValue={setImages} />}
    </Container>
  );
};

export default BigPetCard;
