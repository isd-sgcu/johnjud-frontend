import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import Filter from "../../components/Main/Filter";
import PetsHeading from "../../components/Main/PetsHeading";
import SearchBar from "../../components/Main/SearchBar";
import MainLayout from "../../layouts/MainLayout";
// Page
const MainPage = () => {
  return (
    <main className="flex h-full flex-col space-y-6 p-3 md:p-10">
      <div className="flex w-full flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-full items-center justify-center rounded-3xl bg-johnjud-emerald md:w-4/12">
          <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
        </div>
        <div className="flex w-full flex-col items-center space-y-6 md:items-start">
          <PetsHeading value={4600} />
          <SearchBar />
          <Filter />
        </div>
      </div>
    </main>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
