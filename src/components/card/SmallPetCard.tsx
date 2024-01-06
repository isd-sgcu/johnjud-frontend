import { UtcStringToYearMonth } from "@/utils/dateConverter";
import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import BlankPic144x144 from "../../assets/small-petcard/BlankPic144x144.svg";
interface SmallPetCardProps {
  id: string;
  name: string;
  species: string;
  gender: string;
  birthdate: string;
  status: string;
}
const smallpetcard = ({
  id,
  name,
  species,
  gender,
  birthdate,
  status,
}: SmallPetCardProps) => {
  const genderAns = useMemo(() => {
    return gender === "male" ? "ผู้" : "เมีย";
  }, [gender]);

  const linkTo = useMemo(() => {
    return "/pet/" + id;
  }, [id]);
  const { years, months } = useMemo(() => {
    return UtcStringToYearMonth({ utcString: birthdate });
  }, [birthdate]);
  return (
    <Link to={linkTo}>
      <div className="m-0 h-64 w-44 shrink-0 rounded-2xl bg-white p-3 shadow-md">
        <div className="flex flex-shrink-0 flex-col items-center justify-center gap-y-2.5">
          <div className="flex w-36 rounded-2xl shadow-lg">
            <img className="rounded-2xl" src={BlankPic144x144} alt={name} />
          </div>

          <div className="flex-start m-0 flex w-full flex-col items-start justify-center gap-2 p-0">
            <div className="text-base font-semibold text-black">
              {name} พันธุ์{species}
            </div>
            <div className="inline-flex w-full flex-row items-end justify-between">
              <div className="flex-start m-0 flex flex-col justify-center gap-1 p-0 ">
                <div className="flex-start m-0 flex flex-row items-center justify-start gap-2 p-0 ">
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
                <div className="flex-start m-0 flex flex-row items-center justify-start gap-2 p-0 ">
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
export default smallpetcard;
