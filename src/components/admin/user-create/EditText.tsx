import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface EditTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditText = (props: EditTextProps) => {
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
    <div className={`relative flex min-h-60 w-full lg:min-h-0 lg:h-full`}>
      <TextareaAutosize
        value={props.value}
        className={"w-full break-words rounded-3xl border-2 border-opacity-50 bg-white px-5 py-4 drop-shadow-sm " + ((enableEdit) ? "border-black" : "border-[#D9D9D9]")}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        ref={ref}
        disabled={!enableEdit}
        placeholder="ใส่ข้อความตรงนี้..."
      />
      <Icon
        icon={(enableEdit) ? "ph:floppy-disk":"custom:pencil"}
        className="absolute top-4 right-4 flex h-6 w-6 flex-none cursor-pointer text-accent-red"
        onClick={handleClickEdit}
      />
    </div>
  );
};

export default EditText;
