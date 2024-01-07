const DarkBackground = ({
  isShow,
  isExist,
  setToggle,
}: {
  isShow: boolean;
  isExist: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`bottom-0 left-0 right-0 top-0 z-[1001] bg-black transition ${
        isExist ? "fixed" : "hidden"
      } ${isShow ? "opacity-50" : "opacity-0"}`}
      onClick={() => setToggle(false)}
    ></div>
  );
};

export default DarkBackground;
