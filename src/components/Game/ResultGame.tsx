import background from "@/assets/background/background.png";
import Button from "../Button";

interface ResultGameProps {
  image: string;
  role: string;
  text: string;
  handleOnClickSave: () => void;
  handleOnClickShare: () => void;
}

const ResultGame = (props: ResultGameProps) => {
  return (
    <div
      className="flex min-h-screen flex-col bg-auto bg-top"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="mx-auto my-6 flex w-full justify-center gap-4 space-y-6 md:gap-6 xl:my-10 xl:space-y-10">
        <div className="flex w-full max-w-80 flex-col gap-4 md:gap-6">
          {/* Header + Image */}
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="font-bold text-primary md:text-2xl">
              คุณคือแมว
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
              {props.role}
            </div>
            <div className="w-full break-words text-center text-lg">
              {props.text}
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
    </div>
  );
};

export default ResultGame;
