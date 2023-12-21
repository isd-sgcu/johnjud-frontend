import MainLayout from "../layouts/MainLayout";
import Faq from "./faq";

// Page
const Home = () => {
  return (
    <>
      <div className="font-bold text-2xl">JohnJud Project</div>
      <div>Welcome, Developers!</div>
      <Faq/>
    </>
  );
};

export default Home;

// Layout
export const Layout = MainLayout;
