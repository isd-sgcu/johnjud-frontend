import { Icon } from "@iconify/react/dist/iconify.js";
import TextareaAutosize from "react-autosize-textarea";

interface TextInputInfoProps {
  text: string;
  value: string;
  enableEdit: boolean;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  icon: string;
}

const TextInputInfo = (props: TextInputInfoProps) => {
  return (
    <div className="flex flex-row items-start gap-2">
      <div className="flex flex-row items-center">
        <Icon icon={props.icon} className="h-5 w-5 text-primary" />
        <span className="ml-1 text-nowrap text-primary">{props.text}</span>
      </div>
      <TextareaAutosize
        className={`w-full rounded-lg bg-white px-2 py-1 font-semibold ${
          props.enableEdit ? "border border-accent-gray-variant" : ""
        }`}
        value={props.value}
        disabled={!props.enableEdit}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInputInfo;
