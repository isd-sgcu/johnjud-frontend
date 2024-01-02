import TextareaAutosize from "react-autosize-textarea";

const EditText = (props) => {
  const handleOnChange = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div className={`relative mt-8 flex min-h-60 w-full max-w-80`}>
      <TextareaAutosize
        value={props.value}
        className="w-full rounded-3xl border-2 border-[#D9D9D9] border-opacity-50 bg-white px-5 py-4 drop-shadow-sm"
        onChange={handleOnChange}
        placeholder="ใส่ข้อความตรงนี้..."
      />
    </div>
  );
};

export default EditText;
