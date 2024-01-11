import Button from "../Button";

interface ResultGameProps {
  header: string;
  image: string;
  infoHeader: string;
  infoText: string;
  handleOnClickSave: () => void;
  handleOnClickShare: () => void;
}

const ResultGame = (props: ResultGameProps) => {
  return (
    <div className="mx-auto flex w-full justify-center gap-4 px-6 py-6 md:gap-6 md:py-10">
      <div className="flex w-full max-w-80 flex-col gap-4 md:gap-6">
        {/* Header + Image */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="font-bold text-primary md:text-2xl">
            {props.header}
          </div>
          <div className="aspect-[4:3] w-full overflow-hidden rounded-2xl shadow-md">
            <img
              src={props.image}
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <div className="w-full rounded-2xl bg-accent-light-gray px-6 py-2 text-center text-2xl font-bold text-primary">
            {props.infoHeader}
          </div>
          <div className="w-full break-words text-center text-lg">
            {props.infoText}
          </div>
        </div>

        {/* Save and Share Button */}
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          <Button
            text="บันทึกลงเครื่อง"
            icon="ic:baseline-save-alt"
            onClick={props.handleOnClickSave}
            rounded="2xl"
            variant="primary"
          />
          <Button
            text="แชร์"
            icon="ph:share"
            onClick={props.handleOnClickShare}
            rounded="2xl"
            variant="accent-red"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultGame;
