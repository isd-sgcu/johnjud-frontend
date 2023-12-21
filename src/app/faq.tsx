import QuestionBox from "../components/QuestionBox";

const Questions = [
    {
        question: 'อยากรับแมวจากชมรมต้องทำอะไรบ้าง ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis lectus non lectus accumsan, efficitur dapibus tellus aliquam. Aenean imperdiet felis eu purus iaculis, vitae congue velit maximus. Suspendisse ac lorem at velit pretium maximus. Maecenas congue, lorem sed rhoncus pharetra, mi nisi pellentesque enim, vitae faucibus tellus mi mollis augue. Nam a turpis iaculis, dignissim enim ut, tincidunt elit. Sed id pretium leo, ut rhoncus est. Nulla quis magna vel ex venenatis varius in id velit. Donec porttitor justo in scelerisque ultricies.',
    },
    {
        question: 'เลี้ยงแมว 1 ตัวต้องเตรียมอะไรบ้าง',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis lectus non lectus accumsan, efficitur dapibus tellus aliquam. Aenean imperdiet felis eu purus iaculis, vitae congue velit maximus. Suspendisse ac lorem at velit pretium maximus. Maecenas congue, lorem sed rhoncus pharetra, mi nisi pellentesque enim, vitae faucibus tellus mi mollis augue. Nam a turpis iaculis, dignissim enim ut, tincidunt elit. Sed id pretium leo, ut rhoncus est. Nulla quis magna vel ex venenatis varius in id velit. Donec porttitor justo in scelerisque ultricies..',
    },
    {
        question: 'สามารถรับน้องแมวจากชมรมกลับบ้านได้เร็วสุดแค่ไหน',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        question: 'พรี่บูมรักแมวมากจนต้องนอกใจหมาได้ไหม',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    }
];

const FAQ = () => {

    return <>
        <div className="relative  text-[#08878E] pb-16 px-10 mt-9">
            <div className="flex flex-col items-center mb-6">
                <div className="text-4xl font-semibold leading-normal mb-3 items-center">
                    <p>
                        คำถามที่พบบ่อย
                    </p>
                </div>
                <div className=" flex w-full bg-gray-100 rounded-full p-3 shadow">
                    <img src="../../public/bubble.svg" alt="_blank" />
                    <form>
                        <input type="text" placeholder="ค้นหาคำถาม" className="bg-transparent rounded-md text-black ml-3" />{" "}
                    </form>
                </div>
            </div>
            {Questions.map((question) => {
                return (
                    <QuestionBox question={question.question} answer={question.answer} />
                );
            })}

        </div>
       

            
    </>

};

export default FAQ;