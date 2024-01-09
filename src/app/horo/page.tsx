import Container from "@/components/Container";

import HoroBgContainer from "@/components/Horo/HoroBgContainer";
import Main from "@/components/Horo/index";
import MainLayout from "@/layouts/MainLayout";

const HoroPage = () => {
  return (
    <>
      <Container className="flex items-center justify-center">
        <HoroBgContainer>
          <Main />
        </HoroBgContainer>
      </Container>
    </>
  );
};

export default HoroPage;

export const Layout = MainLayout;
