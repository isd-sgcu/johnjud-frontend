import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import BlankPic144x144 from "../../assets/small-petcard/BlankPic144x144.svg";
interface ISmallPetCardProps {
  id: string;
  name: string;
  species: string;
  gender: string;
  birthdate: string;
  status: string;
}
const UtcStringToList = ({ utcString }: { utcString: string }) => {
  const date = new Date(utcString);
  const currentUtcTime = new Date();
  const currentYear = currentUtcTime.getUTCFullYear;
  console.log(currentYear);
  const month = date.getUTCMonth() + 1; // Month is 0-based, so we add 1
  const timeDifference = currentUtcTime - date;
  const yearDifference = Math.floor(
    timeDifference / (365 * 24 * 60 * 60 * 1000)
  );
  return (
    <div className="text-xs font-normal text-accent-gray">
      อายุ {yearDifference} ปี {month} เดือน
    </div>
  );
};
const smallpetcard = ({
  id,
  name,
  species,
  gender,
  birthdate,
  status,
}: ISmallPetCardProps) => {
  const genderAns = gender == "male" ? "ผู้" : "เมีย";
  const linkTo = "/pet/" + id;
  return (
    <Link to={linkTo}>
      <div className="m-0 h-64 w-44 shrink-0 rounded-2xl bg-white p-3 shadow-md">
        <div className="flex flex-shrink-0 flex-col items-center justify-center gap-y-2.5">
          <div className="bg-accent-grey flex w-36 rounded-2xl drop-shadow-[0_0_6px_rgba(0,0,0,0.50)]">
            <img
              className="rounded-3xl"
              src={BlankPic144x144}
              alt="PetPic 144*144"
            />
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
                      color="#808086"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="text-xs font-normal  text-accent-gray">
                    ตัว{genderAns}
                  </div>
                </div>
                <div className="flex-start m-0 flex flex-row items-center justify-start gap-2 p-0 ">
                  <div>
                    <Icon
                      icon="ph:gift"
                      color="#808086"
                      width="20"
                      height="20"
                    />
                  </div>
                  <UtcStringToList utcString={birthdate} />
                </div>
              </div>
              <div
                className={`h-6 w-6 rounded-full ${
                  status === "adopted" ? "bg-accent-gray" : "bg-primary"
                }`}
              >
                <div className="px-1 py-1">
                  <Icon
                    icon="ph:check-bold"
                    color="#FFFFFF"
                    width="16"
                    height="16"
                  />
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
