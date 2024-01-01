import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { Icon } from '@iconify/react';

const EditText = (props) => {
  const ref = useRef(null);
  const pencilRef = useRef(null);

  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnClick = () => {
    setEnableEdit(!enableEdit);
  };
  const handleOnBlur = (event) => {
    const currentFocus = event.relatedTarget;
    if (currentFocus !== pencilRef.current) setEnableEdit(false);
  };
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
    <div className={`relative mt-4 flex min-h-60 w-full max-w-80`}>
      <TextareaAutosize
        value={props.value}
        className="w-full rounded-3xl border-2 border-[#D9D9D9] border-opacity-50 bg-white px-5 py-4 drop-shadow-sm"
        disabled={!enableEdit}
        onBlur={handleOnBlur}
        ref={ref}
        onChange={handleOnChange}
        placeholder="ใส่ข้อความตรงนี้..."
      />
      <div className="absolute right-5 top-4">
        <Icon icon="mynaui:pencil" color="#C81425" className="flex flex-none w-6 h-6 cursor-pointer" onClick={handleOnClick}/>
      </div>
    </div>
  );
};

export default EditText;
