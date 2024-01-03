import MainLayout from "../../layouts/MainLayout";
import DividerMobile from "../../components/Main/DividerMobile";
import MobilePetsHeading from "../../components/Main/Heading/MobilePetsHeading";
import Heading from "../../components/Main/Heading";
// Page
const MainPage = () => {
  return (
    <main className="flex h-full flex-col space-y-6 p-10">
      <Heading/>
      <DividerMobile/>
      <MobilePetsHeading value={4600}/>
    </main>
  );
};

export default MainPage;

// Layout
export const Layout = MainLayout;
