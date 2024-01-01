import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import PencilIcon from "./PencilIcon";

const EditText = (props) => {
  const ref = useRef(null);

  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnClick = () => {
    setEnableEdit(!enableEdit);
  };
  const handleOnBlur = () => {
    setEnableEdit(false);
  };
  const handleOnChange = (event) => {
    props.setValue(event.target.value);
  };

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
        <PencilIcon onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default EditText;
