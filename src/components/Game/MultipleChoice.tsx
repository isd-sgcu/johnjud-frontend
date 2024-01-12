import { Icon } from "@iconify/react/dist/iconify.js";

interface MultipleChoiceProps {
  index: number;
  headerText: string;
  answers: string[];
}

const MultipleChoice = (props: MultipleChoiceProps) => {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-end pt-[8.25rem]">
      <div className="flex flex-grow w-full justify-center rounded-t-2xl bg-white p-6">
        <div className="flex w-full md:max-w-[50%] flex-col items-center gap-6">
          {/* Header */}
          <div className="relative flex w-full flex-shrink flex-row items-center gap-6">
            <div className="relative flex h-fit w-fit">
              <Icon
                icon="material-symbols:circle"
                className="h-14 w-14 text-primary"
              />
              <div className="absolute left-0 right-0 m-auto flex select-none justify-center self-center text-2xl font-bold text-white">
                {props.index.toString()}
              </div>
            </div>
            <span className="min-w-0 break-words text-2xl font-bold text-primary">
              {props.headerText}
            </span>
          </div>

          {/* Answers */}
          <div className="flex w-full h-full flex-col gap-6 md:gap-12">
            {props.answers.map((ans, index) => {
              return (
                <div
                  key={index}
                  className="flex-grow flex w-full break-words rounded-3xl bg-accent-red px-6 py-2 text-center font-semibold text-white md:text-lg justify-center items-center"
                >
                  {ans}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
