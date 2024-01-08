import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

interface EditNameProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditName = (props: EditNameProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const saveRef = useRef<HTMLDivElement>(null);

  const handleClickEdit = () => {
    setEnableEdit(true);
    setShowName(props.value);
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setEnableEdit(false);
    const currentFocus = event.relatedTarget;
    if (currentFocus && currentFocus === saveRef.current) {
      props.setValue(showName);
    }
  };

  const [showName, setShowName] = useState(props.value);
  const [enableEdit, setEnableEdit] = useState(false);
  const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLInputElement;
    setShowName(element.value);
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
        className={`flex max-w-full flex-row items-center self-end text-pretty md:self-start ${
          enableEdit ? "hidden" : "visible"
        }`}
      >
        <Icon
          icon="custom:pencil"
          className="flex h-6 w-6 flex-none cursor-pointer md:hidden"
          onClick={handleClickEdit}
        />
        <div className="relative flex flex-col">
          <div className="flex break-all pl-1 text-right text-3xl font-bold text-primary md:text-left">
            {props.value}
          </div>
          <div className="mt-1 h-[3px] w-full rounded-full bg-primary" />
        </div>

        <Icon
          icon="custom:pencil"
          className="hidden h-6 w-6 flex-none cursor-pointer md:ml-3 md:flex"
          onClick={handleClickEdit}
        />
      </div>

      <div
        className={
          "flex flex-row items-center gap-4 " +
          (enableEdit ? "visible" : "hidden")
        }
      >
        <TextareaAutosize
          value={showName}
          onChange={handleOnChange}
          className={`flex w-full resize-none text-wrap break-words rounded-lg p-2 text-right text-3xl font-bold text-primary focus:outline-accent-gray-variant lg:text-left ${
            enableEdit ? "visible" : "hidden"
          }`}
          disabled={!enableEdit}
          onBlur={handleOnBlur}
          ref={ref}
          rows={1}
          placeholder="กรุณาใส่ชื่อ..."
        />
        <div ref={saveRef} tabIndex={0}>
          <Icon
            icon="ph:floppy-disk"
            className="h-6 w-6 cursor-pointer text-accent-red"
          />
        </div>
      </div>
    </div>
  );
};

export default EditName;
