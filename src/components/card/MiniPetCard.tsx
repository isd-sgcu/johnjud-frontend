interface ISmallPetCardProps {
  name: string;
  species: string;
  gender: string;
  birthdate: string;
  is_sterile: boolean;
  status: string;
}
const minipetcard = ({
  name,
  species,
  gender,
  birthdate,
  is_sterile,
  status,
}: ISmallPetCardProps) => {
  // render button with props
  return (
    <div className="relative h-[206px] w-[168px]">
      <div className="absolute left-0 top-[58.22px] h-[147.78px] w-[168px] rounded-[26px] bg-white shadow-md" />
      <div className="absolute left-0 top-0 h-28 w-[168px]">
        <div className="absolute left-0 top-0 h-28 w-[168px] rounded-[26px] bg-zinc-300" />
        <img
          className="absolute left-0 top-0 h-28 w-[168px]"
          src="https://via.placeholder.com/168x112"
        />
      </div>
      <div className="absolute left-[13.44px] top-[116.43px] inline-flex h-[80.61px] w-[122.08px] flex-col items-start justify-start gap-1.5">
        <div className="flex flex-col items-start justify-start">
          <div className="font-['Poppins'] text-base font-semibold text-black">
            ไรลีย์
          </div>
          <div className="inline-flex items-start justify-start gap-1">
            <div className="font-['Poppins'] text-[15px] font-normal text-zinc-500">
              พันธ์ุ:
            </div>
            <div className="font-['Poppins'] text-[15px] font-normal text-black">
              แลบราดดอร์
            </div>
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-1.5">
          <div className="flex items-start justify-start gap-1.5">
            <div className="flex w-12 items-center justify-center gap-2.5 rounded-[10px] bg-slate-200 px-1.5">
              <div className="font-['Poppins'] text-[15px] font-semibold text-blue-600">
                เพศผู้
              </div>
            </div>
            <div className="flex h-6 w-12 items-center justify-center gap-2.5 rounded-[10px] bg-zinc-300 px-[7px] py-px">
              <div className="font-['Poppins'] text-sm font-semibold text-black">
                1 ขวบ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default minipetcard;
