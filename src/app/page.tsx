import MainLayout from "../layouts/MainLayout"
// Page
const Home = () => {
  return (
    <>
      <div className="text-2xl font-bold">JohnJud Project</div>
      <div>Welcome, Developers!</div>
      <div>
        ทดสอบ<span className="font-bold">ฟอนต์</span>
      </div>
    </>
  );
};

export default Home;

// Layout
export const Layout = MainLayout;
