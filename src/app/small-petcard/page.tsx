import PawPrint from "../../assets/small-petcard/PawPrint.svg";
import Gift from "../../assets/small-petcard/Gift.svg";
import Check from "../../assets/small-petcard/Check.svg";
import MainLayout from "../../layouts/MainLayout";
enum genders {
  male = "male",
  female = "female",
}
enum status {
  findhome = "findhome",
  adopted = "adopted",
}
const SmallPetCard = [
  {
    name: "ลุงเริง",
    species: "ไซบีเรียน",
    gender: genders.male,
    birthdate: "Wed, 14 Jun 2017 07:00:00 GMT",
    is_sterile: false,
    status: status.findhome,
  },
  {
    name: "หอมมาก",
    species: "บางแก้ว",
    gender: genders.female,
    birthdate: "Sun, 14 Oct 2003 15:00:00 GMT",
    is_sterile: true,
    status: status.adopted,
  },
];

const smallpetcard = () => {
  return (
    <div className="m-0 h-64 w-44 shrink-0 rounded-3xl bg-white p-0 shadow-md ">
      <div className="mx-3.5 mt-3.5 flex flex-shrink-0 flex-col items-center justify-center gap-y-3.5 rounded-3xl mb-3.5">
        <div className="flex w-36 rounded-3xl bg-zinc-300">
          <img
            className="rounded-3xl"
            src="https://via.placeholder.com/144x144"
            alt="PetPic 144*144"
          />
        </div>
        <div className="flex-start m-0 flex w-full flex-col items-start justify-center gap-1 p-0">
          <div className="text-sm font-semibold text-black">
              ไรลีย์ พันธุ์แลบราดอร์
          </div>
          <div className="flex-start m-0 flex flex-col justify-center p-0 gap-1 ">
            <div className="flex-start m-0 flex flex-row justify-start items-center gap-1.5 p-0 ">
              <div>
                <img src={PawPrint} alt="PawPrint Logo" />
              </div>
              <div className="text-sm font-normal  text-zinc-500">
                ตัวผู้
              </div>
            </div>
            <div className="flex-start m-0 flex flex-row justify-start items-center gap-1.5 p-0 ">
              <div>
                <img src={Gift} alt="Gift Logo" />
              </div>
              <div className="text-sm font-normal  text-zinc-500">
                อายุ 1 ปี 2 เดือน
              </div>
              <div className="mr-0 w-6 h-6 bg-teal-600 rounded-full">
                <img className="px-1 py-1" src={Check} alt="Gift Logo" />
              </div>
            </div>
            <div className="flex-start m-0 flex flex-row justify-start gap-1.5 p-0 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default smallpetcard;
export const Layout = MainLayout;
