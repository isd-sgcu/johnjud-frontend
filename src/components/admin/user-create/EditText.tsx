import TextareaAutosize from "react-autosize-textarea";

interface EditTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const EditText = (props: EditTextProps) => {
  const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const element = event.target as HTMLInputElement;
    props.setValue(element.value);
  };
  return (
    <div className={`relative flex min-h-60 w-full lg:min-h-0 lg:flex-grow`}>
      <TextareaAutosize
        value={props.value}
        className="w-full break-words rounded-3xl border-2 border-[#D9D9D9] border-opacity-50 bg-white px-5 py-4 drop-shadow-sm"
        onChange={handleOnChange}
        placeholder="ใส่ข้อความตรงนี้..."
      />
    </div>
  );
};

export default EditText;
