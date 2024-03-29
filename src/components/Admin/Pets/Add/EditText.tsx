import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface EditTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isAdmin: boolean;
}

const EditText = (props: EditTextProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const saveRef = useRef(null);

  const handleClickEdit = () => {
    setEnableEdit(!enableEdit);
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
    <div className={`relative flex min-h-60 w-full md:h-full md:min-h-0`}>
      <TextareaAutosize
        value={props.value}
        className={
          "w-full break-words rounded-3xl border-2 border-opacity-50 bg-white p-4 drop-shadow-sm" +
          (enableEdit ? "border-black" : "border-accent-gray-variant")
        }
        onChange={handleOnChange}
        ref={ref}
        disabled={!enableEdit}
        placeholder="ใส่ข้อความตรงนี้..."
      />
      {props.isAdmin && (
        <div ref={saveRef} tabIndex={0}>
          <Icon
            icon={enableEdit ? "ph:floppy-disk" : "custom:pencil"}
            className="absolute bottom-4 right-4 flex h-8 w-8 flex-none cursor-pointer rounded-full bg-white p-1 text-accent-red shadow-md"
            onClick={handleClickEdit}
          />
        </div>
      )}
    </div>
  );
};

export default EditText;
