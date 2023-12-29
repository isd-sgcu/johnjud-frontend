import { useEffect, useState } from "react";
interface IMiniPetCardProps {
  name: string;
  species: string;
  gender: string;
  birthdate: string;
}
const calculateYearDifference = (utcString: string) => {
  const inputDatetime = new Date(utcString);
  const currentUtcTime = new Date();

  const timeDifference = currentUtcTime - inputDatetime;

  // Convert milliseconds to years (assuming 365 days per year)
  const yearsDifference = Math.floor(
    timeDifference / (365 * 24 * 60 * 60 * 1000)
  );

  return yearsDifference;
};
const MiniPetCard = ({
  name,
  species,
  gender,
  birthdate,
}: IMiniPetCardProps) => {
  const [yearsDifference, setYearsDifference] = useState<number | null>(null);
  useEffect(() => {
    const result = calculateYearDifference(birthdate);
    setYearsDifference(result);
  }, []);
  const genderAns = gender == "male" ? "ผู้" : "เมีย";
  // render button with props
  return (
    <div className="m-0 flex h-52 w-40 flex-shrink-0 flex-col gap-0 rounded-3xl bg-white p-0 shadow-md">
      <div className="flex w-full rounded-3xl bg-zinc-300">
        <img
          className="rounded-3xl"
          src="https://via.placeholder.com/168x112"
          alt="PetPic 168*112"
        />
      </div>
      <div className="flex-start ml-3.5 mt-1 flex flex-col items-start justify-start gap-1.5">
        <div className="flex-start m-0 inline-flex flex-col justify-center gap-1">
          <div className="text-sm font-semibold text-black">{name}</div>
          <div className="inline-flex flex-row items-start justify-start gap-1">
            <div className="text-sm font-normal text-zinc-500">พันธ์ุ:</div>
            <div className="text-sm font-normal text-black">{species}</div>
          </div>
        </div>
        <div className="flex-start items m-0 flex flex-row justify-start gap-1.5 p-0 ">
          <div className="flex w-auto items-center justify-center rounded-lg bg-slate-200">
            <div className="px-1.5 text-sm font-semibold text-blue-600">
              เพศ{genderAns}
            </div>
          </div>
          <div className="flex w-auto items-center justify-center rounded-lg bg-zinc-300 ">
            <div className="px-1.5 text-sm font-semibold text-black">
              {yearsDifference} ขวบ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiniPetCard;
