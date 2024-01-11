import Button from "../Button";

interface ResultGameProps {
    header: string,
    image: string,
    infoHeader: string,
    infoText: string,
    handleOnClickSave: () => void;
    handleOnClickShare: () => void;
}

const ResultGame = (props: ResultGameProps) => {
    return (
        <div className="flex gap-4 md:gap-6 w-full py-6 md:py-10 px-6 mx-auto justify-center">
            <div className="flex flex-col w-full max-w-80 gap-4 md:gap-6">
                {/* Header + Image */}
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="text-primary font-bold md:text-2xl">
                        {props.header}
                    </div>
                    <div className="w-full aspect-[4:3] overflow-hidden rounded-2xl shadow-md">
                        <img src={props.image} className="w-full h-full object-center object-contain" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-full bg-accent-light-gray text-center rounded-2xl px-6 py-2 text-primary font-bold text-2xl">
                        {props.infoHeader}
                    </div>
                    <div className="w-full break-words text-center text-lg">
                        {props.infoText}
                    </div>
                </div>

                {/* Save and Share Button */}
                <div className="flex flex-row items-center justify-between flex-wrap gap-4">
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
}

export default ResultGame;