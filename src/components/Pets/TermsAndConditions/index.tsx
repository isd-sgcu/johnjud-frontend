import { PetContext } from "@/app/pets/[id]/adopt/page";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const [open, setOpen] = useState(false);
  const pet = useContext(PetContext);
  // console.log(pet)

  return (
    <>
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="text-2xl font-bold text-red-700">ข้อตกลงการรับเลี้ยง</h3>
        <div className="ml-4 py-4">
          <ul className="list-decimal">
            <li className="font-bold">
              คุณสมบัติสําหรับคนที่สนใจรับน้อง แมวจากชมรมไปเลี้ยง
            </li>
            <ul className="ml-6 list-disc">
              <li>
                สามารถรอให้น้องฉีดวัคซีนจากทาง ชมรมไปแล้ว 1
                เข็มก่อนถึงจะรับไปได้
              </li>
              <li>
                สามารถพาน้องกลับมาฉีดวัคซีน กับทางชมรม หรือพาน้องไปฉีดวัคซีน
                กับทางคลินิกสัตวแพทย์แถวบ้านจนครบตามโปรแกรมวัคซีน
              </li>
              <li>
                มีความตั้งใจที่จะทําหมันน้อง โดยจะสามารถนําน้องไปทําหมันที่
                คลินิกใกล้บ้าน หรือสามารถนําน้อง กลับมาทําหมันกับคลินิกใกล้จุฬา
                ที่ทางชมรมติดต่อไว้ให้โดย ไม่เสียค่าใช้จ่าย
              </li>
              <li>สามารถพาน้องไปหาหมอ เมื่อน้องเจ็บ ป่วย</li>
              <li>สามารถเลี้ยงระบบปิด</li>
              <li>สามารถอัพเดทน้องแมวหลังจากรับ อุปการะไปได้เป็นระยะๆ</li>
              <li>สามารถมารับน้องแมวได้ด้วยตัวเอง ที่คณะสัตวแพทย์ จุฬาฯ</li>
            </ul>
            <li className="font-bold">
              คุณสมบัติที่ไม่สามารถให้รับน้อง แมวเหล่านี้ไปเลี้ยงได้
            </li>
            <ul className="ml-6 list-disc">
              <li>มีที่พักอาศัยไม่แน่นอน</li>
              <li>
                ยังไม่บรรลุนิติภาวะ (นอกจากผู้ปกครองยินยอมและกรอก
                เอกสารอุปการะให้แทน)
              </li>
              <li>เลี้ยงแบบปล่อย นอนนอกบ้าน</li>
              <li>ต้องการนําไปขยายพันธุ์หรือนํา ไปขายต่อ</li>
            </ul>
          </ul>
        </div>
        <div className="flex-col items-center justify-center md:flex">
          <Button
            key="adopt"
            text="รับเลี้ยงเลย"
            variant="accent-red"
            rounded="2xl"
            className="w-full font-bold md:w-auto md:px-24"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <Modal
        title={pet?.origin == "club" ? "กรุณาติดต่อชมรม" : "ติดต่อเจ้าของ"}
        open={open}
        setOpen={setOpen}
        button={
          pet?.origin == "club" ? (
            <Link to="https://www.facebook.com/CUVETforAnimalWelfareClub/">
              <Button
                key="adopt-modal"
                text="รับเลี้ยงเลย"
                variant="primary"
                rounded="2xl"
                className="w-full font-bold md:w-auto md:px-24"
              />
            </Link>
          ) : (
            <Button
              key="adopt-modal"
              text="ปิด"
              variant="accent-red"
              rounded="2xl"
              className="w-full font-bold md:w-auto md:px-24"
              onClick={() => setOpen(false)}
            />
          )
        }
      >
        {pet?.origin == "club" ? (
          <p className="text-accent-gray">
            กรุณาติดต่อที่ Facebook ของชมรม
            โดยสามารถคลิกที่ปุ่มด้านล่างนี้ได้เลย
          </p>
        ) : (
          <ul className="text-primary">
            <li className="flex justify-between">
              ชื่อ:
              <span className="flex-1 px-2 text-left text-accent-gray">
                {pet?.adopt_by || "-"}
              </span>
            </li>
            <li className="flex justify-between">
              เบอร์:
              <span className="flex-1 px-2 text-left text-accent-gray">
                {pet?.adopt_by || "-"}
              </span>
            </li>
            <li className="flex justify-between">
              ไอดีไลน์:
              <span className="flex-1 px-2 text-left text-accent-gray">
                {pet?.adopt_by || "-"}
              </span>
            </li>
          </ul>
        )}
      </Modal>
    </>
  );
};

export default TermsAndConditions;
