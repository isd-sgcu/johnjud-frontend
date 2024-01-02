import facebookLogo from "../assets/footer/FacebookLogo.svg";
import twitterLogo from "../assets/footer/InstagramLogo.svg";
import johnjudLogo from "../assets/footer/JohnJudLogo.svg";
import instagramLogo from "../assets/footer/TwitterLogo.svg";
const Footer = () => {
  return (
    <div className="mt-auto w-full shrink-0 ">
      <div>
        <div className="mx-auto flex h-full w-full justify-between bg-primary px-7 py-5 lg:py-9">
          {/* Text & Logo*/}
          <div className="flex-start m-0 inline-flex w-[66%] flex-col justify-start gap-4 lg:w-[55%] lg:flex-row lg:items-center lg:gap-0">
            <div className="mr-12 inline-flex items-center justify-start gap-3">
              <img
                className="h-11 w-11 rounded-full"
                src={johnjudLogo}
                alt="Johnjud Logo"
              />
              <div className="text-sm font-bold text-white">JOHNJUD</div>
            </div>
            {/*Text*/}
            <div className="m-0 inline-flex flex-col gap-4 p-0 lg:w-96 lg:flex-wrap lg:gap-3">
              <div className="w-full text-wrap text-xs font-normal text-white lg:w-[95%] lg:text-base">
                สโมสรนิสิตคณะสัตวแพทยศาสตร์ <br className="gap-3"></br>
                จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน
                กรุงเทพ ฯ 10330
              </div>
              <div className="lg:w-90rem w-full text-xs font-normal text-white lg:w-[88%] lg:text-base">
                พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ <br className="gap-3"></br>
                องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
              </div>
            </div>
          </div>
          {/*Social*/}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center">
              <img className="h-8 w-8" src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className="flex items-center justify-center">
              <img className="h-8 w-8" src={twitterLogo} alt="Instagram Logo" />
            </div>
            <div className="flex items-center justify-center">
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
