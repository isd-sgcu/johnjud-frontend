import { Icon } from "@iconify/react/dist/iconify.js";

interface MultipleChoiceProps {
  index: number;
  headerText: string;
  answers: string[];
  onClick: () => void;
}

const MultipleChoice = (props: MultipleChoiceProps) => {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-end pt-[8.25rem] md:min-h-[80vh]">
      <div className="flex w-full flex-grow justify-center rounded-t-2xl bg-white p-6">
        <div className="flex w-full flex-col items-center gap-6 md:max-w-96">
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
          <div className="flex h-full w-full flex-col justify-evenly gap-6">
            {props.answers.map((ans, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full cursor-pointer items-center justify-center break-words rounded-3xl bg-accent-red px-6 py-2 text-center font-semibold text-white md:text-lg"
                  onClick={props.onClick}
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
