import PetCard from "@/components/PetCard";
import MainLayout from "@/layouts/MainLayout";
// Page
const ExamplePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">ExamplePage</h2>
      <PetCard />
    </>
  );
};

export default ExamplePage;

// Layout
export const Layout = MainLayout;
