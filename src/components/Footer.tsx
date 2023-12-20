import React from "react";

const Footer = () => {
  /* mt-auto or margin-top will make footer always on the bottom
  please delete this comment after you read it */

  return <div className="mt-auto">
    <div className="w-[1512px] h-[215px] relative shrink-0">
      <div className="w-[1512px] h-[215px] left-0 top-0 absolute bg-teal-600"></div>
      <div className="left-[28px] top-[87px] absolute justify-start items-center gap-3 inline-flex">
        <img className="w-[42px] h-[42px] rounded-[100px]" src="public\johnjud.png" />
        <div className="text-white text-base font-bold font-['Poppins']">JOHNJUD</div>
      </div>
      <div className="left-[208px] top-[37px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[458px] text-white text-xl font-normal font-['Poppins'] leading-[25px]">สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนน อังรีดูนังต์ แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330</div>
        <div className="w-[397px] text-white text-xl font-normal font-['Poppins'] leading-[25px]">พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย</div>
      </div>

      <div className="left-[1400px] top-[40px] absolute flex-col justify-start items-center gap-6 inline-flex">
        <div className="w-[32px] h-[32px] relative">
        <img className="w-[24px] h-[24px] mx-auto my-auto" src="public\FacebookLogo.svg" />
        </div>
        <div className="w-[32px] h-[32px] relative">
          <img className="w-[24px] h-[24px] mx-auto my-auto" src="public\InstagramLogo.svg" />
        </div>
        <div className="w-[32px] h-[32px] relative">
          <img className="w-[24px] h-[24px] mx-auto my-auto" src="public\TwitterLogo.svg" />
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
