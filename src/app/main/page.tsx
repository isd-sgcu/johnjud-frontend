import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import pawIcon from "../../assets/main/paw.svg";
import AdvertiseBox from "../../components/Main/AdvertiseBox";
import Filter from "../../components/Main/Filter";
import SearchBar from "../../components/Main/SearchBar";
import MockBigPetCard from "../../components/Mock/MockBigPetCard";
import MockSmallPetCard from "../../components/Mock/MockSmallPetCard";
import StatCard from "../../components/StatCard";
import MainLayout from "../../layouts/MainLayout";
import { mockPetData } from "../../mock/mockPetData";
// Page
const MainPage = () => {
  const pets = mockPetData;
  return (
    <main className="flex h-full flex-col space-y-6 p-2  md:p-10">
      <div className="flex w-full flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-full items-center justify-center rounded-3xl bg-johnjud-emerald md:w-4/12">
          <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
        </div>
        <div className="flex w-full flex-col space-y-6 items-center md:items-start">
          <StatCard value={4600} />
          <SearchBar />
          <Filter />
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center space-y-6 md:items-stretch justify-center md:flex-row md:space-x-8">
        <div className="w-full md:w-4/12 mt-6 md:mt-0">
          <AdvertiseBox adSrc="https://via.placeholder.com/300x250" />
        </div>
        <div className="grid w-11/12 grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {pets.map((pet) => {
            return (
              <MockSmallPetCard
                key={pet.id}
                name={pet.name}
                breed={pet.species}
                age={4}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end ">
        <button className="rounded-3xl bg-primary px-16 py-3 text-xl font-bold text-white shadow-md">
          ดูสัตว์เลี้ยงทั้งหมด
        </button>
      </div>
      <div className="my-5 flex w-full items-center justify-center">
        <img src={pawIcon} />
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        {pets.slice(0, 4).map((pet) => (
          <MockBigPetCard
            key={pet.id}
            name={pet.name}
            breed={pet.species}
            age={4}
          />
        ))}
      </div>
    </main>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
