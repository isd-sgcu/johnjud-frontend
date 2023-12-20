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
        backgroundImage: `url(${background})`
      }}
      className="min-h-screen flex flex-col bg-cover bg-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
