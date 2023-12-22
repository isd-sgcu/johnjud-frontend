import facebookLogo from "../assets/footer/FacebookLogo.svg";
import twitterLogo from "../assets/footer/InstagramLogo.svg";
import johnjudLogo from "../assets/footer/JohnJudLogo.svg";
import instagramLogo from "../assets/footer/TwitterLogo.svg";
console.log(facebookLogo);
const Footer = () => {
  return (
    <div className="mt-auto w-full">
      <div className="relative mx-auto h-[215px] w-full shrink-0 lg:h-[215px]">
        <div className="relative flex h-full w-full justify-between bg-teal-600 px-[7.63%] py-[6.80%] lg:px-[1.85%]">
          {/* Below md*/}
          <div className="flex-start inline-flex w-[66%] flex-col justify-between gap-4 lg:w-[50%] lg:flex-row lg:items-center">
            <div className="mr-12 inline-flex h-[25.61%] items-center justify-start gap-3">
              <img
                className="h-[42px] w-[42px] rounded-full"
                src={johnjudLogo}
                alt="Johnjud Logo"
              />
              <div className="text-sm font-bold text-white">JOHNJUD</div>
            </div>
            {/*Text*/}
            <div className="relative inline-flex flex-col gap-4 lg:w-full lg:gap-3">
              <div className="text-xs font-normal leading-[15px] text-white lg:text-xl lg:leading-[25px]">
                สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
              </div>
              <div className="text-xs font-normal leading-[15px] text-white lg:text-xl lg:leading-[25px] lg:w-[90%]">
                พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
              </div>
            </div>
          </div>
          {/*Social*/}
          <div className="inline-flex flex-col items-center justify-center gap-6">
            <div className="relative flex items-center justify-center">
              <img className="h-8 w-8" src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className="relative flex items-center justify-center">
              <img className="h-8 w-8" src={twitterLogo} alt="Instagram Logo" />
            </div>
            <div className="relative flex items-center justify-center">
              <img className="h-6 w-6" src={instagramLogo} alt="Twitter Logo" />
            </div>
          </div>
        </div>
      </div>
      {/*Only available in less than md */}
      {/*Johnjud*/}
    </div>
  );
};

export default Footer;
