import { Icon } from "@iconify/react";
import { useState } from "react";

const questionBox = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [showed, setShowed] = useState(false);

  return (
    <div className="mb-6 flex cursor-pointer flex-col rounded-3xl bg-white shadow-lg">
      <div
        className="my-3 flex flex-row items-center justify-between rounded-3xl px-8 py-4 "
        onClick={() => setShowed(!showed)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon
              icon="ph:question-fill"
              className="mr-3 h-8 w-8 text-primary"
            />
            <h2 className="mr-6 text-xl font-medium leading-normal">
              {question}
            </h2>
          </div>
        </div>
        <Icon
          icon="ph:caret-down-bold"
          className={
            "h-6 w-6 transition-all duration-300 " +
            (showed ? "rotate-180" : "")
          }
        />
      </div>
      <div
        className={
          "flex justify-center transition-all duration-300 " +
          (showed ? "block" : "hidden")
        }
      >
        <p className="mx-7 mb-6 max-w-md text-start text-base text-zinc-500">
          {answer}
        </p>
      </div>
    </div>
  );
};
export default questionBox;
