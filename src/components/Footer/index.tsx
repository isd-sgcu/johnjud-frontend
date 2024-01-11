import usePathStyle from "@/hooks/usePathStyle";
import { Icon } from "@iconify/react";

const Footer = () => {
  const style = usePathStyle();

  return (
    <div
      className={`mt-auto flex w-full shrink-0 flex-row justify-between p-6 ${style.color}`}
    >
      {/* Text & Logo*/}
      <div className="flex w-56 flex-col items-start justify-start gap-4 lg:w-full lg:flex-row lg:items-center lg:gap-11">
        <div className="flex flex-row items-center justify-center space-x-3">
          <div>
            <img
              className="h-11 w-11 rounded-full"
              src={style.logo}
              alt="Johnjud Logo"
            />
          </div>
          <div className="text-base font-bold text-white">JOHNJUD</div>
        </div>
        {/*Text*/}
        <div className="flex flex-col items-center justify-center space-y-4 self-stretch text-xs font-normal text-white md:w-96 lg:text-sm">
          <div className="flex w-full text-balance lg:self-auto">
            สโมสรนิสิตคณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ถนนอังรีดูนังต์
            แขวงปทุมวัน เขตปทุมวัน กรุงเทพ ฯ 10330
          </div>
          <div className="flex w-full lg:self-auto lg:text-balance">
            พัฒนาโดย ฝ่ายพัฒนาระบบสารสนเทศ <br />
            องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
          </div>
        </div>
      </div>
      {/*Social*/}
      <div className="flex flex-col items-center justify-center space-y-6">
        <div>
          <a href="https://www.facebook.com/CUVETforAnimalWelfareClub?mibextid=LQQJ4d">
            <Icon icon="ph-facebook-logo" className="h-8 w-8 text-white" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/johnjud_care?igsh=MXY2N21zajhjOGllYQ==">
            <Icon icon="ph-instagram-logo" className="h-8 w-8 text-white" />
          </a>
        </div>
        <div>
          <a href="https://x.com/johnjud_cu?s=21">
            <Icon icon="custom:md:x-logo" className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
