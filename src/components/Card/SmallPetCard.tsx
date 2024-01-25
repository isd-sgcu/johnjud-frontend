import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface SmallPetCardProps {
  id: string;
  name: string;
  image: string;
  gender: string;
  birthdate: string;
  status: string;
}

const SmallPetCard = ({
  id,
  name,
  image,
  gender,
  birthdate,
  status,
}: SmallPetCardProps) => {
  const genderAns = useMemo(() => {
    return gender === "male" ? "ผู้" : "เมีย";
  }, [gender]);

  const linkTo = useMemo(() => {
    return "/pets/" + id;
  }, [id]);

  const { years, months } = useMemo(() => {
    return UtcStringToYearMonth({ utcString: birthdate });
  }, [birthdate]);

  return (
    <Link to={linkTo}>
      <div className="w-48 rounded-2xl bg-white p-3 shadow-md">
        <div className="space-y-2">
          <div className="flex justify-center rounded-2xl ">
            <img className="rounded-2xl shadow-lg" src={image} alt={name} />
          </div>
          <div className="space-y-2">
            <div className="text-nowrap text-base font-semibold text-black">
              {name}
            </div>
            <div className="flex-start flex w-full flex-row items-end justify-between">
              <div className="space-y-1">
                <div className="flex flex-row items-center justify-start gap-2">
                  <div>
                    <Icon
                      icon="ph:paw-print"
                      className="h-5 w-5 text-accent-gray"
                    />
                  </div>
                  <div className="text-xs font-normal  text-accent-gray">
                    ตัว{genderAns}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <div>
                    <Icon icon="ph:gift" className="h-5 w-5 text-accent-gray" />
                  </div>
                  <div className="text-xs font-normal text-accent-gray">
                    อายุ {years} ปี {months} เดือน
                  </div>
                </div>
              </div>
              <div
                className={`h-6 w-6 rounded-full ${
                  status === "adopted" ? "bg-accent-gray" : "bg-primary"
                }`}
              >
                <div className="px-1 py-1">
                  <Icon icon="ph:check-bold" className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SmallPetCard;
