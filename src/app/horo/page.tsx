import Container from "@/components/Container";
import Main from "@/components/Horo/index";
import MainLayout from "@/layouts/MainLayout";

const HoroPage = () => {
  return (
    <>
      <Container className="flex items-center justify-center">
        <Main />
      </Container>
    </>
  );
};

export default HoroPage;

export const Layout = MainLayout;
