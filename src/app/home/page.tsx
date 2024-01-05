import Banner from "@/components/Main/Banner";
import Divider from "@/components/Divider/Divider";
import DividerMobile from "@/components/Divider/DividerMobile";
import MobilePetsHeading from "@/components/Main/Heading/MobilePetsHeading";
import MiniPetCardContainer from "@/components/Main/CardList/MiniPetCardContainer";
import MainLayout from "@/layouts/MainLayout"
import Container from "@/components/Container";
import Button from "@/components/Button";
import Filter from "@/components/Main/SearchFilter/Filter";
import PetsHeading from "@/components/Main/Heading/PetsHeading";
import Search from "@/components/Main/SearchFilter/Search";
import JohnjudImage from "@/assets/johnjud-logo-with-text-side.png";
import { useNavigate } from "react-router-dom";
// Page
const MainPage = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <Container className="flex flex-col items-center justify-center md:flex-row md:space-x-9">
        <div className="flex items-center justify-center rounded-2xl bg-primary-variant-2 md:w-6/12 ">
          <img src={JohnjudImage} alt="Johnjud" className="px-10 py-7" />
        </div>
        <div className="flex w-full flex-col items-center space-y-6 md:items-start">
          <PetsHeading value={4600} />
          <Search />
          <Filter />
        </div>
      </Container>
      <Container>
        <DividerMobile />
        <MobilePetsHeading value={4600} />
      </Container>
      <Container className="flex justify-center md:justify-between">
        <div className="hidden md:flex md:w-4/12">
          <Banner imageUrl="https://via.placeholder.com/440x440?text=Your+Ad+Here" />
        </div>
        <MiniPetCardContainer />
      </Container>
      <Container className="flex items-center justify-center md:justify-end">
        <Button
          text="ดูสัตว์เลี้ยงทั้งหมด"
          variant="primary"
          rounded="full"
          className="w-full md:w-auto font-bold"
          onClick ={() => navigate('/pets')} // Navigation path
        />
      </Container>
      <Container>
        <DividerMobile />
      </Container>
      <Container className="flex md:hidden">
        <Banner imageUrl="https://via.placeholder.com/468x600?text=Your+Ad+Here" />
      </Container>
      <Container>
        <Divider />
        <DividerMobile />
      </Container>
    </>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
