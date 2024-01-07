import { UtcStringToYear } from "@/utils/dateConverter";
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
    return "/pets/" + id;
  }, [id]);

  const years = useMemo(() => {
    return UtcStringToYear({ utcString: birthdate });
  }, [birthdate]);

  return (
    <Link to={linkTo}>
      <div className="w-40 rounded-2xl bg-white shadow-md">
        <div className="flex h-28 w-full rounded-2xl">
          <img className="rounded-2xl" src={BlankPic168x112} alt={name} />
        </div>
        <div className="space-y-2 px-3 py-2">
          <div>
            <div className="text-base font-semibold text-black">{name}</div>
            <div className="space-x-1">
              <span className="text-sm font-normal text-accent-gray">
                พันธ์ุ:
              </span>
              <span className="text-sm font-normal text-black">{species}</span>
            </div>
          </div>
          <div className="space-x-1.5">
            <span className="rounded-xl bg-accent-blue-variant px-2 py-0.5 text-sm font-semibold text-accent-blue">
              เพศ{genderAns}
            </span>
            <span className="rounded-xl bg-accent-light-gray px-2 py-0.5 text-sm font-semibold text-black">
              {years} ขวบ
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MiniPetCard;
