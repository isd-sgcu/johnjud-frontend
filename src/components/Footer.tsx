import johnjudLogo from '../assets/footer/JohnJudLogo.svg';
import facebookLogo from '../assets/footer/FacebookLogo.svg';
import twitterLogo from '../assets/footer/InstagramLogo.svg';
import instagramLogo from '../assets/footer/TwitterLogo.svg';
console.log(facebookLogo);
const Footer = () => {
  return (
    <div className="w-full mt-auto">
      <div className="w-full h-[243px] xl:h-[215px] relative shrink-0 mx-auto">
        <div className="w-full h-full left-0 top-0 absolute bg-teal-600">
          <div className="hidden xl:block">
            <div className="left-[1.85%] top-[40.46%] w-[8.74%] h-[19.53%] absolute
          md:justify-start md:items-center md:gap-3 inline-flex ">
              <img className="w-[42px] h-[42px] rounded-full" src={johnjudLogo} alt="Johnjud Logo" />
              <div className="text-white text-base font-bold font-Poppins">JOHNJUD</div>
            </div>
            {/*Text*/}
            <div className="absolute md:left-[14%] md:top-[17.21%] w-[30.3%] h-[66.6%] flex-col justify-center items-start gap-4 inline-flex">
              <div className="w-full md:w-full text-white text-xl font-normal font-Poppins leading-[25px]">
                สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
              </div>
              <div className="w-full md:w-[86.69%] text-white text-xl font-normal font-Poppins leading-[25px]">
                พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
              </div>
            </div>
          </div>
          {/* Below md*/}
          <div className='xl:hidden left-[7.63%] top-[12.20%] w-[55%] h-[76.27%] flex flex-col justify-start items-start gap-4 absolute'>
            <div className="left-[0%] top-[0%] w-[62.85%] h-[25.61%] justify-start items-center gap-3 inline-flex">
              <img className="w-[42px] h-[42px] rounded-full" src={johnjudLogo} alt="Johnjud Logo" />
              <div className="text-white text-base font-bold font-['Poppins']">JOHNJUD</div>
            </div>
            {/*Text*/}

            <div className="text-white text-xs font-normal font-'Poppins' leading-[15px]">
              สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
            </div>
            <div className="text-white text-xs font-normal font-'Poppins' leading-[15px]">
              พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
            </div>
          </div>
          {/*Social*/}
          <div className="left-[81.42%] top-[20%] xl:left-[92%]  xl:top-[13.6%]  relative flex-col justify-start items-center gap-6 inline-flex">
            <div className="relative flex items-center justify-center">
              <img className="w-8 h-8" src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className="relative flex items-center justify-center">
              <img className="w-8 h-8" src={twitterLogo} alt="Instagram Logo" />
            </div>
            <div className="relative flex items-center justify-center">
              <img className="w-6 h-6" src={instagramLogo} alt="Twitter Logo" />
            </div>
          </div>
        </div >


      </div>
      {/*Only available in less than md */}
      {/*Johnjud*/}

    </div >
  );
};

export default Footer;