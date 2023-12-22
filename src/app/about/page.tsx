import johnjudLogo from "../../assets/johnjud-with-text.png";
import MainLayout from "../../layouts/MainLayout";

const About = () => {
  return (
    <div className="mt-[28px] justify-center lg:ml-[7.5%] lg:mr-[12%] lg:grid lg:grid-cols-3">
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col">
          <div className="text-center text-[20px] lg:text-start">เกี่ยวกับ</div>
          <div className="text-center text-[40px] font-bold text-primary lg:text-start">
            ชมรมสวัสดิภาพสัตว์
          </div>
        </div>

        <img
          src={johnjudLogo}
          className="w-[55%] max-w-[300px] lg:w-[75%] lg:max-w-none"
        />
      </div>

      <div className="relative mt-[10px] flex flex-col items-center lg:col-span-2 lg:col-start-2 lg:ml-[4%] lg:mt-0">
        <div className="w-full text-center text-[40px] font-bold text-primary underline decoration-2 underline-offset-8 lg:pl-[8%] lg:text-start">
          พวกเราเป็นใคร?
        </div>
        <p className="mx-[8%] mt-[5px] rounded-[20px] bg-white px-[24px] py-[12px] text-center text-[20px] shadow-lg lg:py-[24px]">
          พวกเราชมรม{" "}
          <span className="font-bold">
            นิสิตสัตวแพทย์จุฬาฯเพื่อสวัสดิภาพสัตว์
          </span>
          เรียกย่อๆกันว่า <span className="font-bold">ชมรมสวัสดิภาพสัตว์</span>{" "}
          หรือ <span className="font-bold text-primary">ชมรมจรจัด</span>
          <br />
          เป็นชมรมจิตอาสาที่มีหน้าที่เข้าไปช่วยสอดส่องดูแลสุขภาพและเพิ่มสวัสดิภาพที่ดีขึ้นให้แก่สุนัขและแมวจรจัด
          ภายในบริเวณจุฬาลงกรณ์มหาวิทยาลัยและชุมชนโดยรอบโดยจะทําการ สํารวจจํานวน
          ทําข้อมูลทะเบียนประวัติสัตว์ ช่วยดูแลสุขภาพ
          ฉีดวัคซีนรวมและวัคซีนพิษสุนัขบ้า เป็นประจําทุกปีและให้ยากําจัดปรสิต
          เป็นประจําอย่างต่อเนื่อง รวมถึงการควบคุมอัตราการเพิ่มของประชากร
          สุนัขและแมวจรจัดเหล่านี้โดยการ
          ทําหมันและประชาสัมพันธ์เพื่อหาผู้รับอุปการะในกรณี สุนัขและแมวที่ได้รับ
          การประเมินว่ามีโอกาสที่จะปรับพฤติกรรมเพื่อหาบ้านได้
          ในกรณีสัตว์ป่วยจะมีการจัดตั้งทีมเข้าไปช่วยดูแลหาทุนค่ารักษาพยาบาล
        </p>
        <div className="relative my-[24px] flex max-w-fit flex-col items-center">
          <div className="text-center text-[36px] text-primary">
            หากมีข้อสงสัยเพิ่มเติม
          </div>
          <div className="text-center text-[16px]">
            ช่องทางการติดต่อเพิ่มเติม
          </div>
          <div className="mt-[12px] h-[200px] w-full bg-[#D9D9D9]"></div>
          <div className="mx-[29px] mt-[24px] flex flex-row space-x-[24px] rounded-full bg-primary px-[18px] py-[12px]">
            {/* FB logo */}
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[20px] bg-[#0866FF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5ZM18 31.5V15.7501C18 14.855 18.3556 13.9966 18.9885 13.3636C19.6215 12.7307 20.4799 12.3751 21.375 12.3751H23.625M13.5 20.2501H22.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* IG logo */}
            <div className="relative flex items-center justify-center">
              <div
                style={{
                  background:
                    "linear-gradient(to top right, #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4)",
                }}
                className="flex h-[55px] w-[55px] items-center justify-center rounded-[20px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M22.625 18C22.625 20.5543 20.5543 22.625 18 22.625V24.625C21.6589 24.625 24.625 21.6589 24.625 18H22.625ZM18 22.625C15.4457 22.625 13.375 20.5543 13.375 18H11.375C11.375 21.6589 14.3411 24.625 18 24.625V22.625ZM13.375 18C13.375 15.4457 15.4457 13.375 18 13.375V11.375C14.3411 11.375 11.375 14.3411 11.375 18H13.375ZM18 13.375C20.5543 13.375 22.625 15.4457 22.625 18H24.625C24.625 14.3411 21.6589 11.375 18 11.375V13.375ZM11.8125 6.0625H24.1875V4.0625H11.8125V6.0625ZM24.1875 6.0625C27.3631 6.0625 29.9375 8.63686 29.9375 11.8125H31.9375C31.9375 7.53229 28.4677 4.0625 24.1875 4.0625V6.0625ZM29.9375 11.8125V24.1875H31.9375V11.8125H29.9375ZM29.9375 24.1875C29.9375 27.3631 27.3631 29.9375 24.1875 29.9375V31.9375C28.4677 31.9375 31.9375 28.4677 31.9375 24.1875H29.9375ZM24.1875 29.9375H11.8125V31.9375H24.1875V29.9375ZM11.8125 29.9375C8.63686 29.9375 6.0625 27.3631 6.0625 24.1875H4.0625C4.0625 28.4677 7.53229 31.9375 11.8125 31.9375V29.9375ZM6.0625 24.1875V11.8125H4.0625V24.1875H6.0625ZM6.0625 11.8125C6.0625 8.63686 8.63686 6.0625 11.8125 6.0625V4.0625C7.53229 4.0625 4.0625 7.53229 4.0625 11.8125H6.0625Z"
                    fill="white"
                  />
                  <path
                    d="M25.3125 12.375C26.2445 12.375 27 11.6195 27 10.6875C27 9.75552 26.2445 9 25.3125 9C24.3805 9 23.625 9.75552 23.625 10.6875C23.625 11.6195 24.3805 12.375 25.3125 12.375Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {/* X logo */}
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[20px] bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.0413 2L5.16326 22H1.84619L18.6267 2H22.0413Z"
                  fill="white"
                />
                <path
                  d="M21.4809 21.25H16.5824L2.41409 2.75H7.42537L21.4809 21.25Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const Layout = MainLayout;
