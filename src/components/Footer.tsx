import johnjudLogo from "@/assets/footer/JohnJudLogo.svg";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="flex w-full shrink-0 flex-row justify-between border-none bg-primary p-6">
      {/* Text & Logo*/}
      <div className="flex w-56 flex-col items-start justify-start gap-4 lg:w-full lg:flex-row lg:items-center lg:gap-11">
        <div className="flex flex-row items-center justify-center space-x-3">
          <span>
            <img
              className="h-11 w-11 rounded-full"
              src={johnjudLogo}
              alt="Johnjud Logo"
            />
          </span>
          <span className="text-base font-bold text-white">JOHNJUD</span>
        </div>
        {/*Text*/}
        <div className="flex flex-col space-y-4 text-xs text-white lg:text-base">
          <div className="w-full">
            สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
            ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
          </div>
          <div className="w-full">
            พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ
            องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
          </div>
        </div>
      </div>
      {/*Social*/}
      <div className="flex flex-col items-center justify-center space-y-6">
        <div>
          <Icon icon="ph-facebook-logo" className="h-8 w-8 text-white" />
        </div>
        <div>
          <Icon icon="ph-instagram-logo" className="h-8 w-8 text-white" />
        </div>
        <div>
          <Icon icon="custom:md:twitter-logo" className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
