import { useState } from "react";

const questionBox = ({question, answer}: { question: string, answer: string }) => {

    const [showed, setShowed] = useState(false);

    return (
    <div className="bg-white rounded-3xl flex flex-col shadow-lg mb-6">
        <div
            className="flex flex-row my-3 rounded-3xl px-8 py-4 items-center justify-between "
            onClick={() => setShowed(!showed)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-6 h-6 mr-3" src="../../public/question_icon.svg" alt="_blank" />
                    <h2 className="text-xl leading-normal">    
                        {question}
                    </h2>
                </div>
            </div>
            <img className={"w-4 h-2 transition-all duration-500 " + (showed ? "rotate-180" : "")} src="../../public/back_icon.svg" alt="_blank" />
        </div>
        <div className={"transition-all duration-500 " + (showed ? "block" : "hidden")}>      
                <p className="mx-6 mb-6 font-light text-gray-500 text-lg">
                    {answer}
                </p>
            </div>
    </div>
    );
};
export default questionBox;