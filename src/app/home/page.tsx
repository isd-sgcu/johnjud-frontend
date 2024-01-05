import AllPetsButton from "../../components/Main/AllPetsButton";
import Banner from "../../components/Main/Banner";
import Divider from "../../components/Main/Divider";
import DividerMobile from "../../components/Main/DividerMobile";
import Heading from "../../components/Main/Heading";
import MobilePetsHeading from "../../components/Main/Heading/MobilePetsHeading";
import MiniPetCardContainer from "../../components/Main/PetCardContainer/MiniPetCardContainer";
import MainLayout from "../../layouts/MainLayout";
import Container from "@/components/Container";
// Page
const MainPage = () => {
  return (
    <>
      <Container>
        <Heading />
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
        <AllPetsButton />
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
