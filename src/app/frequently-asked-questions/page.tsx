import Bubble from "@/assets/faq/bubble.svg";
import Container from "@/components/Container";
import QuestionBox from "@/components/QuestionBox";
import MainLayout from "@/layouts/MainLayout";

const Questions = [
  {
    question: "อยากรับแมวจากชมรมต้องทำอะไรบ้าง ",
    answer:
      "ติดต่อเข้ามาทางช่องทางการติดต่อของชมรม ได้เลยค่ะ ไม่ว่าจะเฟสบุ๊ค ไอจี หรือทวิตเตอร์ ทางชมรมจะส่งเอกสารอุปการะให้ทางคนที่ ต้องการอุปถัมภ์น้องแมวกรอกค่ะ คําถามข้างในจะเป็นคําถามทั่วไปเกี่ยวกับที่อยู่อาศัย สัตว์เลี้ยงที่มีหรือประสบการณ์การเลี้ยงน้องหมา น้องแมวค่ะ อาจจะเยอะนิดนึง แต่เพื่อให้แน่ใจว่าเจ้าเหมียวแต่ละตัวที่ได้บ้านไปจะไม่ถูกทิ้งอีกค่ะ หลังจากกรอกเอกสารอุปการะมาเรียบร้อยแล้ว เมื่ออาจารย์ที่ปรึกษาชมรมและทีมงานของชมรมเห็นว่าไม่มีปัญหาหรือเรื่องน่ากังวล ทางชมรมจะติดต่อกลับไปและนัดวันรอให้เจ้าของใหม่มารับน้องกลับบ้านค่ะ",
  },
  {
    question: "เลี้ยงแมว 1 ตัวต้องเตรียมอะไรบ้าง",
    answer:
      "ของใช้น้องแมวที่ขาดไม่ได้และต้องมีเลย คือ ชามนํ้า ชามอาหาร กระบะทราย ทรายแมว และตะกร้า หรือกระเป๋าสําหรับน้องแมวค่ะ อื่นๆ เพิ่มเติม เช่น ที่ลับเล็บ ของเล่น และอุปกรณ์แปรงขน ค่อยๆซื้อเพิ่มตามความชอบของเจ้าของและน้องแมวภายหลังได้ค่ะ",
  },
  {
    question: "สามารถรับน้องแมวจากชมรมกลับบ้านได้เร็วสุดแค่ไหน",
    answer:
      "ถ้าเป็นเจ้าแมวเด็ก ทางชมรมจะแนะนําว่า รอให้น้องแมวได้รับวัคซีนอย่างน้อย 1 เข็มก่อน แล้วค่อยกลับบ้านได้ค่ะ เพื่อให้น้องมีภูมิคุ้มกันและไม่เป็นโรคง่ายเมื่อเปลี่ยนสถานที่เลี้ยงค่ะ",
  },
  {
    question: "เรื่องวัคซีนและทําหมัน ต้องทํายังไงบ้าง",
    answer:
      "น้องแมวทุกตัวจากชมรมจะได้รับวัคซีนไปแล้วอย่างน้อย 1 เข็มขึ้นไปแล้วแต่ช่วงอายุค่ะ ทางชมรมจะให้สมุดวัคซีนของน้องกับทางเจ้าของไปด้วยถ้าเจ้าของสะดวกพาน้องกลับมาฉีดวัคซีนกับทางชมรมสามารถดูวันที่จะต้องฉีดวัคซีนวันต่อไปจากในสมุดและนัดวันที่จะนําน้องกลับมาฉีดวัคซีนกับทางชมรมได้โดยไม่เสียค่าใช้จ่าย หรือหากต้องการพาน้องไปฉีดวัคซีนที่คลินิกแถวบ้านก็ได้เช่นกัน และเมื่อน้องแมวมีอายุถึงประมาณ 4 เดือน หรือมีนํ้าหนัก 2 กิโลกรัมขึ้นไป หากต้องการทําหมันสามารถทักมาติดต่อและสอบถามวันที่สามารถพามาทําหมันได้โดยไม่เสียค่าใช้จ่ายเช่นกันค่ะ",
  },
];

const Faq = () => {
  return (
    <Container className="relative flex justify-center">
      <div className="relative mt-9 max-w-2xl text-teal-600">
        <div className="mb-6 flex max-w-2xl flex-col items-center">
          <div className="mb-3 items-center text-4xl font-semibold leading-normal">
            <p>คำถามที่พบบ่อย</p>
          </div>
          <div className="relative flex w-full rounded-full bg-white p-3 shadow">
            <img src={Bubble} alt="_blank" />
            <input
              type="text"
              placeholder="ค้นหาคำถาม"
              className="ml-3 w-full rounded-md bg-transparent text-black"
            />{" "}
          </div>
        </div>
        {Questions.map((question) => {
          return (
            <QuestionBox
              key={question.question}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Faq;
export const Layout = MainLayout;
