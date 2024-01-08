import { Icon } from "@iconify/react/dist/iconify.js";

interface ToggleInputInfoProps {
  value: boolean;
  onClick: () => void;
  onBlur: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLDivElement>
  ) => void;
  inputRef: React.MutableRefObject<null>;
  enableEdit: boolean;
  icon: string;
  text: string;
}
const ToggleInputInfo = (props: ToggleInputInfoProps) => {
  return (
    <div
      className={
        "flex h-fit w-fit select-none flex-row items-center rounded-full px-3 py-1 " +
        (props.value ? "bg-accent-red " : "bg-accent-gray bg-opacity-50 ") +
        (props.enableEdit ? "cursor-pointer" : "")
      }
      onClick={props.onClick}
      onBlur={props.onBlur}
      ref={props.inputRef}
      tabIndex={1}
    >
      <div
        className={
          "mr-2 rounded-full p-1 " + (props.value ? "" : "bg-accent-gray")
        }
      >
        <Icon icon={props.icon} className="h-4 w-4 text-white" />
      </div>
      <div
        className={
          "font-semibold " + (props.value ? "text-white " : "text-accent-gray ")
        }
      >
        {props.text}
      </div>
    </div>
  );
};
export default ToggleInputInfo;
