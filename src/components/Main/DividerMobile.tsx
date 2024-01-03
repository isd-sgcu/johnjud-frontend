import pawIcon from "../../assets/main/paw.svg";

const DividerMobile = () => {
  return (
    <div className="flex items-center justify-center md:hidden">
      <img src={pawIcon} alt="pawIcon" className="h-6 w-6" />
    </div>
  );
};

export default DividerMobile;
