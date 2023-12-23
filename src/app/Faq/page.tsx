import QuestionBox from "../../components/QuestionBox";
import MainLayout from "../../layouts/MainLayout";

const Questions = [
  {
    question: "อยากรับแมวจากชมรมต้องทำอะไรบ้าง ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis lectus non lectus accumsan, efficitur dapibus tellus aliquam. Aenean imperdiet felis eu purus iaculis, vitae congue velit maximus. Suspendisse ac lorem at velit pretium maximus. Maecenas congue, lorem sed rhoncus pharetra, mi nisi pellentesque enim, vitae faucibus tellus mi mollis augue. Nam a turpis iaculis, dignissim enim ut, tincidunt elit. Sed id pretium leo, ut rhoncus est. Nulla quis magna vel ex venenatis varius in id velit. Donec porttitor justo in scelerisque ultricies.",
  },
  {
    question: "เลี้ยงแมว 1 ตัวต้องเตรียมอะไรบ้าง",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis lectus non lectus accumsan, efficitur dapibus tellus aliquam. Aenean imperdiet felis eu purus iaculis, vitae congue velit maximus. Suspendisse ac lorem at velit pretium maximus. Maecenas congue, lorem sed rhoncus pharetra, mi nisi pellentesque enim, vitae faucibus tellus mi mollis augue. Nam a turpis iaculis, dignissim enim ut, tincidunt elit. Sed id pretium leo, ut rhoncus est. Nulla quis magna vel ex venenatis varius in id velit. Donec porttitor justo in scelerisque ultricies..",
  },
  {
    question: "สามารถรับน้องแมวจากชมรมกลับบ้านได้เร็วสุดแค่ไหน",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "พรี่บูมรักแมวมากจนต้องนอกใจหมาได้ไหม",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const FAQ = () => {
  return (
    <>
      <div className="relative mt-9 max-w-sm px-10 pb-16 text-teal-600">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 items-center text-4xl font-semibold leading-normal">
            <p>คำถามที่พบบ่อย</p>
          </div>
          <div className="relative flex w-full rounded-full bg-gray-100 p-3 shadow">
            <img src="../../public/bubble.svg" alt="_blank" />
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
    </>
  );
};

export default FAQ;
export const Layout = MainLayout;
