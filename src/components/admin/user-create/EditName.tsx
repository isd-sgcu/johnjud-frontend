import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { Icon } from '@iconify/react';

const EditName = (props) => {
  const ref = useRef(null);

  const handleClickEdit = () => {
    setEnableEdit(true);
  };
  const handleOnBlur = () => {
    setEnableEdit(false);
  };

  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnChange = (event) => {
    props.setValue(event.target.value);
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
    <div className="flex w-full">
      <div
        className={`flex w-full flex-row items-center justify-end ${
          enableEdit ? "hidden" : "visible"
        }`}
      >
        <Icon icon="mynaui:pencil" color="#C81425" className="flex flex-none w-6 h-6 cursor-pointer" onClick={handleClickEdit} />
        <span className="pl-1 flex text-wrap break-all text-right text-3xl font-bold text-primary">
          {props.value}
        </span>
      </div>
      <TextareaAutosize
        value={props.value}
        onChange={handleOnChange}
        className={`flex w-full resize-none text-wrap break-all rounded-lg p-2 text-right text-3xl font-bold text-primary focus:outline-[#D9D9D9] ${
          enableEdit ? "visible" : "hidden"
        }`}
        disabled={!enableEdit}
        onBlur={handleOnBlur}
        ref={ref}
        rows={1}
      />
    </div>
  );
};

export default EditName;
