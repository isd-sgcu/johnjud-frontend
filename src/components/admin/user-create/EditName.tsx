import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { Icon } from '@iconify/react';

interface EditNameProps {
  value : string,
  setValue: React.Dispatch<React.SetStateAction<string>>
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
  const handleOnChange = (event : React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLInputElement
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
    <div className="flex flex-col w-full relative">
      <div
        className={`flex flex-row w-fit items-center self-end lg:self-start ${
          enableEdit ? "hidden" : "visible"
        }`}
      >
        <Icon icon="custom:pencil" color="#C81425" className="flex flex-none w-6 h-6 cursor-pointer lg:hidden" onClick={handleClickEdit} />
        <div className="pl-1 break-all text-right lg:text-left text-3xl font-bold text-primary">
          {props.value}
        </div>
        <Icon icon="custom:pencil" color="#C81425" className="hidden flex-none w-6 h-6 cursor-pointer lg:flex lg:ml-3" onClick={handleClickEdit} />
      </div>

      <TextareaAutosize
        value={props.value}
        onChange={handleOnChange}
        className={`flex w-full resize-none text-wrap break-words rounded-lg p-2 text-right lg:text-left text-3xl font-bold text-primary focus:outline-[#D9D9D9] ${
          enableEdit ? "visible" : "hidden"
        }`}
        disabled={!enableEdit}
        onBlur={handleOnBlur}
        ref={ref}
        rows={1}
        placeholder="กรุณาใส่ชื่อ..."
      />

      
      <div className="flex w-full mt-1 pt-1 rounded-full max-w-20 lg:max-w-32 self-end lg:self-start bg-primary" />
    </div>
  );
};

export default EditName;
