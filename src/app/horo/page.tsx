import Container from "@/components/Container";
import HoroBgContainer from "@/components/Horo/HoroBgContainer";
import MainLayout from "@/layouts/MainLayout";
import SelectCard from "@/components/Card/SelectCard";
import Divider from "@/components/Divider";
const HoroPage = () => {
  return (
    <>
      <Container className="flex justify-center items-center">
        <HoroBgContainer>
          <Divider/>
          <h2 className="text-2xl text-white font-bold text-nowrap">เลือกไพ่ 1 ใบเพื่อทำนาย</h2>
          <SelectCard />
          <Divider/>
        </HoroBgContainer>
      </Container>
    </>
  )
}

export default HoroPage;

export const Layout = MainLayout;