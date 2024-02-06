import PetCard from "@/components/Card/PetCard";
import MainLayout from "@/layouts/MainLayout";

const PetCardProps = {
  id: "07921",
  image: "gay",
  type: "idk",
  name: "humdum",
  status: "findHome",
  gender: "male",
  birthDate: "10",
  habit: "sleep",
  isSterile: false,
  isLiked: false,
  isVisibled: true,
};

// Page
const ExamplePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">ExamplePage</h2>
      {PetCard.map((PetCardProps) => {
          return (
            <PetCardProps
              key={PetCardProps.question}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
    </>
  );
};

export default ExamplePage;

// Layout
export const Layout = MainLayout;
