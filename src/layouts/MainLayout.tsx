import background from "../assets/background/background.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="flex min-h-screen flex-col bg-auto bg-top"
    >
      <Navbar />
      <div className="my-6 space-y-6 xl:my-10 xl:space-y-10">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
