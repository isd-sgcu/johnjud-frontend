import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface EditTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditText = (props: EditTextProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const saveRef = useRef(null);

  const handleClickEdit = () => {
    if (enableEdit) {
      props.setValue(showText);
    } else {
      setShowText(props.value);
    }
    setEnableEdit(!enableEdit);
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const currentFocus = event.relatedTarget;
    if (!(currentFocus && currentFocus === saveRef.current)) {
      setShowText(props.value);
      setEnableEdit(false);
    }
  };

  const [enableEdit, setEnableEdit] = useState(false);
  const [showText, setShowText] = useState(props.value);
  const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLInputElement;
    setShowText(element.value);
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
    <div className={`relative flex min-h-60 w-full lg:h-full lg:min-h-0`}>
      <TextareaAutosize
        value={showText}
        className={
          "w-full break-words rounded-3xl border-2 border-opacity-50 bg-white p-4 drop-shadow-sm " +
          (enableEdit ? "border-black" : "border-[#D9D9D9]")
        }
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        ref={ref}
        disabled={!enableEdit}
        placeholder="ใส่ข้อความตรงนี้..."
      />
      <div ref={saveRef} tabIndex={0}>
        <Icon
          icon={enableEdit ? "ph:floppy-disk" : "custom:pencil"}
          className="absolute right-4 top-4 flex h-6 w-6 flex-none cursor-pointer text-accent-red"
          onClick={handleClickEdit}
        />
      </div>
    </div>
  );
};

export default EditText;
