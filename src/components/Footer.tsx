import facebookLogo from "../assets/footer/FacebookLogo.svg";
import twitterLogo from "../assets/footer/InstagramLogo.svg";
import johnjudLogo from "../assets/footer/JohnJudLogo.svg";
import instagramLogo from "../assets/footer/TwitterLogo.svg";
console.log(facebookLogo);
const Footer = () => {
  return (
    <div className="mt-auto w-full">
      <div className="relative mx-auto h-[243px] w-full shrink-0 xl:h-[215px]">
        <div className="absolute left-0 top-0 h-full w-full bg-teal-600">
          <div className="hidden xl:block">
            <div
              className="absolute left-[1.85%] top-[40.46%] inline-flex h-[19.53%]
          w-[8.74%] md:items-center md:justify-start md:gap-3 "
            >
              <img
                className="h-[42px] w-[42px] rounded-full"
                src={johnjudLogo}
                alt="Johnjud Logo"
              />
              <div className="font-Poppins text-base font-bold text-white">
                JOHNJUD
              </div>
            </div>
            {/*Text*/}
            <div className="absolute inline-flex h-[66.6%] w-[30.3%] flex-col items-start justify-center gap-4 md:left-[14%] md:top-[17.21%]">
              <div className="font-Poppins w-full text-xl font-normal leading-[25px] text-white md:w-full">
                สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน
                อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
              </div>
              <div className="font-Poppins w-full text-xl font-normal leading-[25px] text-white md:w-[86.69%]">
                พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ
                องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
              </div>
            </div>
          </div>
          {/* Below md*/}
          <div className="absolute left-[7.63%] top-[12.20%] flex h-[76.27%] w-[55%] flex-col items-start justify-start gap-4 xl:hidden">
            <div className="left-[0%] top-[0%] inline-flex h-[25.61%] w-[62.85%] items-center justify-start gap-3">
              <img
                className="h-[42px] w-[42px] rounded-full"
                src={johnjudLogo}
                alt="Johnjud Logo"
              />
              <div className="font-['Poppins'] text-base font-bold text-white">
                JOHNJUD
              </div>
            </div>
            {/*Text*/}

            <div className="font-'Poppins' text-xs font-normal leading-[15px] text-white">
              สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์
              แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
            </div>
            <div className="font-'Poppins' text-xs font-normal leading-[15px] text-white">
              พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ
              องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
            </div>
          </div>
          {/*Social*/}
          <div className="relative left-[81.42%] top-[20%]  inline-flex  flex-col items-center justify-start gap-6 xl:left-[92%] xl:top-[13.6%]">
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
