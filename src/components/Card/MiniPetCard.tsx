import dog from "@/assets/dog.webp";
import dayjs from "dayjs";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface MiniPetCardProps {
  id: string;
  name: string;
  image: string | undefined;
  habit: string;
  gender: string;
  birthdate: string;
}

const MiniPetCard = ({
  id,
  name,
  image,
  habit,
  gender,
  birthdate,
}: MiniPetCardProps) => {
  const genderInfo = useMemo(() => {
    if (gender === "male") return "เพศผู้";
    if (gender === "female") return "เพศเมีย";
    return null;
  }, [gender]);

  const linkTo = useMemo(() => {
    return "/pets/" + id;
  }, [id]);

  const age = useMemo(() => {
    const year = dayjs().diff(dayjs(birthdate), "year");
    const month = dayjs().diff(dayjs(birthdate), "month");
    const day = dayjs().diff(dayjs(birthdate), "day");

    if (year > 0) return year + " ขวบ";
    if (month > 0) return month + " เดือน";
    return day + " วัน";
  }, [birthdate]);

  return (
    <Link to={linkTo}>
      <div className="w-40 rounded-2xl bg-white shadow-md">
        <div className="flex h-28 w-full rounded-2xl">
          <img
            className="w-full rounded-2xl object-cover object-center"
            src={image ? image : dog}
            alt={name}
          />
        </div>
        <div className="space-y-2 px-3 py-2">
          <div>
            <div className="line-clamp-1 text-base font-semibold text-black">
              {name}
            </div>
            <div className="flex flex-row space-x-1">
              <div className="w-1/3 text-sm font-normal text-accent-gray">
                habits:
              </div>
              <div className="line-clamp-1 text-sm font-normal text-black">
                {habit}
              </div>
            </div>
          </div>
          <div className="space-x-1.5">
            {genderInfo && (
              <span className="rounded-xl bg-accent-blue-variant px-2 py-0.5 text-sm font-semibold text-accent-blue">
                {genderInfo}
              </span>
            )}
            <span className="rounded-xl bg-accent-light-gray px-2 py-0.5 text-sm font-semibold text-black">
              {age}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MiniPetCard;
