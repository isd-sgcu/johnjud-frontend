import pawIcon from "../../assets/main/paw.svg";

const DividerMobile = () => {
  return (
    <div className="hidden items-center justify-center md:flex">
      <img src={pawIcon} alt="pawIcon" className="h-9 w-9" />
    </div>
  );
};

export default DividerMobile;
