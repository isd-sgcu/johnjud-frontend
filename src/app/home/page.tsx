import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import Filter from "../../components/Main/Filter";
import PetsHeading from "../../components/Main/PetsHeading";
import SearchBar from "../../components/Main/SearchBar";
import MainLayout from "../../layouts/MainLayout";
import DividerMobile from "../../components/Main/DividerMobile";
import MobilePetsHeading from "../../components/Main/MobilePetsHeading";
// Page
const MainPage = () => {
  return (
    <main className="flex h-full flex-col space-y-6 p-10">
      <section className="flex flex-col md:flex-row justify-center items-center">

        <div className="flex items-center justify-center rounded-2xl bg-primary-variant-2">
          <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
        </div>
        <div className="flex flex-col md:items-start items-center space-y-6">
          <PetsHeading value={4600} />
          <SearchBar />
          <Filter />
        </div> 
      </section>
      <DividerMobile/>
      <MobilePetsHeading value={4600}/>
    </main>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
