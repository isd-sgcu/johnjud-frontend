import { Icon } from "@iconify/react/dist/iconify.js";
import TextareaAutosize from "react-autosize-textarea";

interface TextInputInfoProps {
    text: string,
    value: string,
    enableEdit: boolean,
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement | HTMLDivElement>) => void,
    onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
    inputRef: React.MutableRefObject<null>,
    icon: string,
}

const TextInputInfo = (props: TextInputInfoProps) => {
    return (
        <div className="flex flex-row items-start">
            <div className="flex flex-row items-center">
                <Icon icon={props.icon} className="h-5 w-5 text-primary" />
                <span className="ml-1 text-primary">{props.text}</span>
            </div>
            <TextareaAutosize
                className={`ml-3 w-full rounded-lg bg-white px-2 font-semibold ${props.enableEdit ? "border border-[#D9D9D9]" : ""
                    }`}
                value={props.value}
                disabled={!props.enableEdit}
                onBlur={props.onBlur}
                ref={props.inputRef}
                onChange={props.onChange}
            />
        </div>
    );
}

export default TextInputInfo;