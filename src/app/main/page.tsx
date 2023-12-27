import JohnjudImage from "../../assets/johnjud-logo-with-text-side.png";
import SearchBar from "../../components/Main/SearchBar";
import StatCard from "../../components/StatCard";
import MainLayout from "../../layouts/MainLayout";

// Page
const MainPage = () => {
  return (
    <div className="flex min-h-screen items-center space-x-6 p-10">
      <div className="w-5/12 rounded-3xl bg-johnjud-emerald">
        <img
          src={JohnjudImage}
          alt="Johnjud"
          className="h-60 w-80 px-10 py-7"
        />
      </div>
      <div className="flex w-full flex-col items-start space-y-6">
        <StatCard value={4600} />
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
