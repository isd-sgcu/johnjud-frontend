import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react/dist/iconify.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TextInputInfoProps {
  text: string;
  date: string;
  enableEdit: boolean;
  changeSpecificField: (tag: string, data: string | boolean) => void;
  icon: string;
}
/* `${years} ปี ${months} เดือน` */
const DateInputInfo = (props: TextInputInfoProps) => {
  const { months, years } = UtcStringToYearMonth({ utcString: props.date });
  const startDate = new Date(props.date);

  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-row items-center">
        <Icon icon={props.icon} className="h-5 w-5 text-primary" />
        <span className="ml-1 text-primary">{props.text}</span>
      </div>
      {props.enableEdit ? (
        <div className="px-4 font-semibold">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              if (date) {
                props.changeSpecificField(
                  "birthdate",
                  date.toISOString().slice(0, 10)
                );
              }
            }}
          />
          <div className="font-normal">*กรุณาเลือกวัน-เดือน-ปีเกิด</div>
        </div>
      ) : (
        <div className="w-full break-words rounded-3xl border-opacity-50 bg-white px-5 font-semibold">
          {`${years} ปี ${months > 0 ? months + "เดือน" : ""}`}
        </div>
      )}
    </div>
  );
};

export default DateInputInfo;
