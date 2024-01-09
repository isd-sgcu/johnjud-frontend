import Container from "@/components/Container";
import HoroBgContainer from "@/components/Horo/HoroBgContainer";
import MainLayout from "@/layouts/MainLayout";
import SelectCard from "@/components/Card/SelectCard";
import Divider from "@/components/Divider";
import { Icon } from "@iconify/react"; // Import the Icon component correctly

const HoroPage = () => {
  return (
    <>
      <Container className="flex justify-center items-center">
        <HoroBgContainer>
          <div className="flex md:hidden justify-center items-center space-x-3">
            <Icon icon="custom:md:line" />
            <Divider variant="accent-yellow" />
            <Icon icon="custom:md:line" className=""/>
          </div>
          <h2 className="text-2xl text-white font-bold text-nowrap">เลือกไพ่ 1 ใบเพื่อทำนาย</h2>
          <SelectCard />
          <div className="flex md:hidden justify-center items-center space-x-3">
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