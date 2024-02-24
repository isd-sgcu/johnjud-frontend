import { Icon } from "@iconify/react/dist/iconify.js";
import Select from "react-select";

interface TextInputInfoProps {
  text: string;
  value: string;
  enableEdit: boolean;
  changeSpecificField: (tag: string, data: string | boolean) => void;
  icon: string;
}

const options = [
  { value: "male", label: "ผู้" },
  { value: "female", label: "เมีย" },
];

const OptionInputInfo = (props: TextInputInfoProps) => {
  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-row items-center">
        <Icon icon={props.icon} className="h-5 w-5 text-primary" />
        <span className="ml-1 text-primary">{props.text}</span>
      </div>
      {props.enableEdit ? (
        <Select
          options={options}
          className="w-full px-3 font-semibold"
          onChange={(choice) => {
            if (choice) {
              props.changeSpecificField("gender", choice.value);
            }
          }}
        />
      ) : (
        <div className="w-full break-words rounded-3xl border-opacity-50 bg-white px-5 font-semibold">
          {props.value}
        </div>
      )}
    </div>
  );
};

export default OptionInputInfo;
