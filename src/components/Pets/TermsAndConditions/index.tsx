import Button from "@/components/Button";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold text-red-700">ข้อตกลงการรับเลี้ยง</h1>
      <div className="ml-4 py-4">
        <ul className="list-decimal">
          <li className="font-bold">
            คุณสมบัติสําหรับคนที่สนใจรับน้อง แมวจากชมรมไปเลี้ยง
          </li>
          <ul className="ml-6 list-disc">
            <li>
              สามารถรอให้น้องฉีดวัคซีนจากทาง ชมรมไปแล้ว 1 เข็มก่อนถึงจะรับไปได้
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
        <Link to="https://www.facebook.com/CUVETforAnimalWelfareClub/">
          <Button
            text="รับเลี้ยงเลย"
            variant="accent-red"
            rounded="2xl"
            className="w-full font-bold md:w-auto md:px-24"
          />
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
