import SelectCard from "@/components/Card/SelectCard";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import HoroBgContainer from "@/components/Horo/HoroBgContainer";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react"; // Import the Icon component correctly

const HoroPage = () => {
  return (
    <>
      <Container className="flex items-center justify-center">
        <HoroBgContainer>
          <div className="flex items-center justify-center space-x-3 md:hidden">
            <Icon icon="custom:md:line" />
            <Divider variant="accent-yellow" />
            <Icon icon="custom:md:line" />
          </div>
          <h2 className="text-nowrap text-2xl font-bold text-white">
            เลือกไพ่ 1 ใบเพื่อทำนาย
          </h2>
          <SelectCard />
          <div className="flex items-center justify-center space-x-3 md:hidden">
            <Icon icon="custom:md:line" />
            <Divider variant="accent-yellow" />
            <Icon icon="custom:md:line" />
          </div>
        </HoroBgContainer>
      </Container>
    </>
  );
};

export default HoroPage;

export const Layout = MainLayout;
