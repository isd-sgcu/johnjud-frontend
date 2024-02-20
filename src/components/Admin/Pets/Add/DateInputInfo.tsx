import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent } from "react";

interface DateInputInfoProps {
  text: string;
  value: string;
  onChange: (date: string) => void;
  icon: string;
  enableEdit: boolean;
}

const DateInputInfo = (props: DateInputInfoProps) => {
  const maxDate = new Date().toISOString().split("T")[0];

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    props.onChange(date);
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex flex-row items-center">
        <Icon icon={props.icon} className="h-5 w-5 text-primary" />
        <span className="ml-1 text-nowrap text-primary">{props.text}</span>
      </div>
      <div className="col-span-3">
        {props.enableEdit ? (
          <div className="flex flex-grow">
            <input
              type="date"
              className="w-full rounded-lg border border-accent-gray-variant px-2 py-1 font-semibold"
              onChange={handleOnChange}
              value={props.value}
              max={maxDate}
            />
          </div>
        ) : (
          <div className="ml-2 font-semibold">{props.value}</div>
        )}
      </div>
    </div>
  );
};

export default DateInputInfo;
