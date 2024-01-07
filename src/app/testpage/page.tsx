import PetCard from "@/components/PetCard";
import MainLayout from "@/layouts/MainLayout";

// Page
const ExamplePage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">ExamplePage</h2>
      <PetCard
        id="1"
        image=""
        type="dog"
        name="Johny the third"
        status="adopted"
        gender="male"
        birthDate="2023-11-06T00:00:00Z"
        habit="เล่นกับเด็ก"
        isSterile={false}
        isLiked={false}
        isVisibled={true}
      />
    </>
  );
};

export default ExamplePage;

// Layout
export const Layout = MainLayout;
