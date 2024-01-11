import Container from "@/components/Container";
import HoroGame from "@/components/Horo/index";
import MainLayout from "@/layouts/MainLayout";

const HoroPage = () => {
  return (
    <>
      <Container className="flex items-center justify-center p-10">
        <HoroGame />
      </Container>
    </>
  );
};

export default HoroPage;

export const Layout = MainLayout;
