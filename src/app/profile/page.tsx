import Container from "@/components/Container";
import Divider from "@/components/Divider";
import PetCard from "@/components/Card/PetCard";
import { usePetsQuery } from "@/hooks/queries/usePetsQuery";
import { Pet } from "@/types/pets";
import MainLayout from "@/layouts/MainLayout";

const favourite = () => {
  
  const { data }  = usePetsQuery();
  
  return (
    <>
      <Container className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl">
            Welcome,&nbsp;
            <span className="font-bold">This is JohnJud!</span>
          </div>
        </div>
      </Container>
      <Divider variant="primary"></Divider>
      <Container className="flex flex-col items-center gap-6 py-6 lg:gap-10 lg:py-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
          <div className="font-semibold text-primary lg:text-xl">
            สัตว์เลี้ยงที่ถูกใจ
          </div>
          <div className="h-0.5 w-[100px] rounded-lg bg-primary"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-9">
          {data?.pets.map((pet: Pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              image={
                "https://f.ptcdn.info/251/076/000/r6phkmmxuGNF1erTdMG-o.jpg"
              }
              type={pet.type}
              name={pet.name}
              status={pet.status}
              gender={pet.gender}
              birthDate={pet.birthdate}
              habit={pet.habit}
              isSterile={pet.is_sterile}
              isLiked={false}
              isVisibled={pet.is_visible}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default favourite;

export const Layout = MainLayout;
