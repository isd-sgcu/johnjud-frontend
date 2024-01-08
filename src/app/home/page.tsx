import JohnjudImage from "@/assets/johnjud-logo-with-text-side.png";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Banner from "@/components/Main/Banner";
import BigPetCardContainer from "@/components/Main/CardList/BigPetCardContainer";
import MiniPetCardContainer from "@/components/Main/CardList/MiniPetCardContainer";
import Filter from "@/components/Main/Filter";
import Heading from "@/components/Pets/Heading";
import Search from "@/components/Search/PetSearch";
import MainLayout from "@/layouts/MainLayout";
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
          <div className="hidden md:flex">
            <Heading onSearch />
          </div>
          <Search variant="green" />
          <Filter />
        </div>
      </Container>
      <Container className="flex items-center justify-center md:hidden">
        <Divider />
      </Container>
      <Container className="md:hidden">
        <Heading onSearch />
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
          className="w-full font-bold md:w-auto"
          onClick={() => navigate("/pets")} // Navigation path
        />
      </Container>
      <Container>
        <Divider />
      </Container>
      <Container className="flex md:hidden">
        <Banner imageUrl="https://via.placeholder.com/468x600?text=Your+Ad+Here" />
      </Container>
      <Container className="flex items-center justify-center md:hidden">
        <Divider />
      </Container>
      <Container>
        <BigPetCardContainer />
      </Container>
    </>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;