import MainLayout from "../../layouts/MainLayout";

enum genders {
  male = "male",
  female = "female",
}
enum status {
  findhome = "findhome",
  adopted = "adopted",
}
const MiniPetCard = [
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
    birthdate: "Sun, 15 Apr 1989 15:00:00 GMT",
    is_sterile: true,
    status: status.adopted,
  },
];

const minipetcard = () => {
  return (
    <div className="m-0 flex h-52 w-40 flex-shrink-0 flex-col gap-0 rounded-3xl bg-white p-0 shadow-md">
      <div className="flex w-full rounded-3xl bg-zinc-300">
        <img
          className="rounded-3xl"
          src="https://via.placeholder.com/168x112"
          alt="PetPic 168*112"
        />
      </div>
      <div className="flex-start flex flex-col items-start justify-start gap-1.5 ml-3.5 mt-1">
        <div className="flex-start m-0 inline-flex flex-col justify-center gap-1">
          <div className="text-sm font-semibold text-black">ไรลีย์</div>
          <div className="inline-flex flex-row items-start justify-start gap-1">
            <div className="text-sm font-normal text-zinc-500">พันธ์ุ:</div>
            <div className="text-sm font-normal text-black">แลบราดดอร์</div>
          </div>
        </div>
        <div className="flex-start m-0 flex flex-row justify-start items gap-1.5 p-0 ">
          <div className="flex w-auto items-center justify-center rounded-lg bg-slate-200">
            <div className="px-1.5 text-sm font-semibold text-blue-600">
              เพศผู้
            </div>
          </div>
          <div className="flex w-auto items-center justify-center rounded-lg bg-zinc-300 ">
            <div className="px-1.5 text-sm font-semibold text-black">1 ขวบ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default minipetcard;

// Layout
export const Layout = MainLayout;
