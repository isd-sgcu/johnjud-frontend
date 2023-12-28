import Check from "../../assets/small-petcard/Check.svg";
import Gift from "../../assets/small-petcard/Gift.svg";
import PawPrint from "../../assets/small-petcard/PawPrint.svg";
interface ISmallPetCardProps {
  name: string;
  species: string;
  gender: string;
  birthdate: string;
  status: string;
}
const UtcStringToList = (utcString: string) => {
  const date = new Date(utcString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // Month is 0-based, so we add 1
  console.log("Parsed Date:", date);
  console.log("Is NaN:", isNaN(date.getTime()));

  return (
    <div className="text-sm font-normal  text-zinc-500">
      อายุ {year} ปี {month} เดือน
    </div>
  );
};
const smallpetcard = ({
  name,
  species,
  gender,
  birthdate,
  status,
}: ISmallPetCardProps) => {
  const genderAns = gender == "male" ? "ผู้" : "เมีย";
  return (
    <div className="m-0 h-64 w-44 shrink-0 rounded-3xl bg-white p-0 shadow-md ">
      <div className="mx-3.5 mb-3.5 mt-3.5 flex flex-shrink-0 flex-col items-center justify-center gap-y-3.5 rounded-3xl">
        <div className="flex w-36 rounded-3xl bg-zinc-300">
          <img
            className="rounded-3xl"
            src="https://via.placeholder.com/144x144"
            alt="PetPic 144*144"
          />
        </div>
        <div className="flex-start m-0 flex w-full flex-col items-start justify-center gap-1 p-0">
          <div className="text-sm font-semibold text-black">
            {name} พันธุ์{species}
          </div>
          <div className="flex-start m-0 flex flex-col justify-center gap-1 p-0 ">
            <div className="flex-start m-0 flex flex-row items-center justify-start gap-1.5 p-0 ">
              <div>
                <img src={PawPrint} alt="PawPrint Logo" />
              </div>
              <div className="text-sm font-normal  text-zinc-500">
                ตัว{genderAns}
              </div>
            </div>
            <div className="flex-start m-0 flex flex-row items-center justify-start gap-1.5 p-0 ">
              <div>
                <img src={Gift} alt="Gift Logo" />
              </div>
              <UtcStringToList utcString={birthdate} />
              <div
                className={`mr-0 h-6 w-6 rounded-full ${
                  status === "adopted" ? "bg-gray-500" : "bg-blue-500"
                }`}
              >
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
