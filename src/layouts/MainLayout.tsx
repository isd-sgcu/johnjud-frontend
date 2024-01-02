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
      className="flex min-h-screen flex-col gap-y-6 bg-auto bg-top lg:gap-y-10"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
