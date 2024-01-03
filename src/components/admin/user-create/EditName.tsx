import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface EditNameProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditName = (props: EditNameProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleClickEdit = () => {
    setEnableEdit(true);
  };
  const handleOnBlur = () => {
    setEnableEdit(false);
  };

  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLInputElement;
    props.setValue(element.value);
  };

  // focus at the end of text when enable
  useEffect(() => {
    if (enableEdit && ref.current) {
      ref.current.focus();
      const inputLength = ref.current.value.length;
      ref.current.setSelectionRange(inputLength, inputLength);
    }
  }, [enableEdit]);
  return (
    <div className="relative flex w-full flex-col">
      <div
        className={`flex w-fit flex-row items-center self-end lg:self-start ${
          enableEdit ? "hidden" : "visible"
        }`}
      >
        <Icon
          icon="custom:pencil"
          color="#C81425"
          className="flex h-6 w-6 flex-none cursor-pointer lg:hidden"
          onClick={handleClickEdit}
        />
        <div className="break-all pl-1 text-right text-3xl font-bold text-primary lg:text-left">
          {props.value}
        </div>
        <Icon
          icon="custom:pencil"
          color="#C81425"
          className="hidden h-6 w-6 flex-none cursor-pointer lg:ml-3 lg:flex"
          onClick={handleClickEdit}
        />
      </div>

      <TextareaAutosize
        value={props.value}
        onChange={handleOnChange}
        className={`flex w-full resize-none text-wrap break-words rounded-lg p-2 text-right text-3xl font-bold text-primary focus:outline-[#D9D9D9] lg:text-left ${
          enableEdit ? "visible" : "hidden"
        }`}
        disabled={!enableEdit}
        onBlur={handleOnBlur}
        ref={ref}
        rows={1}
        placeholder="กรุณาใส่ชื่อ..."
      />

      <div className="mt-1 flex w-full max-w-20 self-end rounded-full bg-primary pt-1 lg:max-w-32 lg:self-start" />
    </div>
  );
};

export default EditName;
