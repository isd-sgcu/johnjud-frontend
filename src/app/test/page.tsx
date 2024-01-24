import sampleImage from "@/assets/horo/9-card-for-horo/2.png";
import PetCanvas from "@/components/Pets/PetCanvas";
import MainLayout from "@/layouts/MainLayout";

// Page
const ExamplePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">ExamplePage</h2>
      <PetCanvas
        petImage={sampleImage}
        petName="The Cinnamon"
        petText="ช่วงนี้เป็นช่วงของความพัฒนา ก้าวหน้า โดยเฉพาะเรื่องการงาน และการเรียน จะได้รับผิดชอบงาน มากขึ้น หากเป็นพนักงานก็จะมี โอกาสได้เลื่อนตำแหน่ง หากเป็น นักเรียน นักศึกษา จะมีผลการเรียนที่ ดีขึ้น แต่ไพ่ขอแนะนำว่าคุณควร พึงระวังไว้ว่าโอกาสดีๆ ไม่ได้มีมา บ่อยๆ อย่ารอช้า คุณควรขยันหมั่น เพียรอย่างต่อเนื่องแล้วทุกสิ่งทุก อย่างจะสำเร็จสมประสงค์"
      />
    </>
  );
};

export default ExamplePage;

// Layout
export const Layout = MainLayout;
