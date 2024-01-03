import AllPetsButton from "../../components/Main/AllPetsButton";
import Banner from "../../components/Main/Banner";
import DividerMobile from "../../components/Main/DividerMobile";
import Heading from "../../components/Main/Heading";
import MobilePetsHeading from "../../components/Main/Heading/MobilePetsHeading";
import MiniPetCardContainer from "../../components/Main/PetCardContainer/MiniPetCardContainer";
import MainLayout from "../../layouts/MainLayout";
// Page
const MainPage = () => {
  return (
    <main className="flex h-full flex-col space-y-6 p-6 md:p-16">
      <Heading />
      <DividerMobile />
      <MobilePetsHeading value={4600} />
      <section className="flex justify-between">
        <div className="hidden md:flex md:w-4/12">
          <Banner imageUrl="https://via.placeholder.com/440x440?text=Your+Ad+Here" />
        </div>
        <MiniPetCardContainer />
      </section>
      <AllPetsButton />
      <DividerMobile />
      <Banner imageUrl="https://via.placeholder.com/468x600?text=Your+Ad+Here" />
      <DividerMobile />
    </main>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
