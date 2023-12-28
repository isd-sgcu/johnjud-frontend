import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import pawIcon from "../../assets/main/paw.svg";
import AdvertiseBox from "../../components/Main/AdvertiseBox";
import Filter from "../../components/Main/Filter";
import SearchBar from "../../components/Main/SearchBar";
import MockBigPetCard from "../../components/Mock/MockBigPetCard";
import MockSmallPetCard from "../../components/Mock/MockSmallPetCard";
import StatCard from "../../components/StatCard";
import MainLayout from "../../layouts/MainLayout";
import mockPetData from "../../mock/mockPetData";

// Page
const MainPage = () => {
  const pets = mockPetData;
  return (
    <main className="p-10">
      <div className="flex h-full items-start justify-center space-x-8">
        <div className="flex w-5/12 flex-col space-y-8">
          <div className="h-full w-full rounded-3xl bg-johnjud-emerald">
            <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
          </div>
          <AdvertiseBox adSrc="" />
        </div>
        <div className="flex w-full flex-col  space-y-6">
          <StatCard value={4600} />
          <SearchBar />
          <Filter />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {pets.map((pet) => (
              <MockSmallPetCard
                key={pet.id}
                name={pet.name}
                breed={pet.species}
                age={ 4 }
              />
            ))}
          </div>
          <div className="flex items-center justify-end ">
            <button className="rounded-3xl bg-primary px-16 py-3 text-xl font-bold text-white shadow-md">
              ดูสัตว์เลี้ยงทั้งหมด
            </button>
          </div>
        </div>
      </div>
      <div className="my-5 flex w-full items-center justify-center">
        <img src={pawIcon} />
      </div>
      <div className="flex space-x-8">
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
