import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import BlankPic168x112 from "../../assets/small-petcard/BlankPic168x112.svg";
interface MiniPetCardProps {
  id: string;
  name: string;
  species: string;
  gender: string;
  birthdate: string;
}

const MiniPetCard = ({
  id,
  name,
  species,
  gender,
  birthdate,
}: MiniPetCardProps) => {
  const genderAns = useMemo(() => {
    return gender === "male" ? "ผู้" : "เมีย";
  }, [gender]);

  const linkTo = useMemo(() => {
    return "/pet/" + id;
  }, [id]);
  const { years,months } = useMemo(() => {
    return UtcStringToYearMonth({ utcString: birthdate });
  }, [birthdate]);
  // render button with props
  return (
    <Link to={linkTo}>
      <div className="m-0 flex h-52 w-40 flex-shrink-0 flex-col gap-0 rounded-2xl bg-white p-0 shadow-md">
        <div className="flex h-28 w-full rounded-2xl">
          <img className="rounded-2xl" src={BlankPic168x112} alt={name} />
        </div>
        <div className="flex-start ml-3.5 mt-1 flex flex-col items-start justify-start gap-1.5">
          <div className="flex-start m-0 inline-flex flex-col justify-center gap-1">
            <div className="text-base font-semibold text-black">{name}</div>
            <div className="inline-flex flex-row items-start justify-start gap-1">
              <div className="text-sm font-normal text-accent-gray">
                พันธ์ุ:
              </div>
              <div className="text-sm font-normal text-black">{species}</div>
            </div>
          </div>
          <div className="flex-start items m-0 flex flex-row justify-start gap-1.5 p-0 ">
            <div className="flex h-6 items-center justify-center rounded-lg bg-accent-blue-variant">
              <div className="px-1.5 text-sm font-semibold text-accent-blue">
                เพศ{genderAns}
              </div>
            </div>
            <div className="flex h-6 items-center justify-center rounded-lg bg-accent-light-gray">
              <div className="px-1.5 text-sm font-semibold text-black">
                {years} ขวบ
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MiniPetCard;
