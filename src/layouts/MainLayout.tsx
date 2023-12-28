import background from "../assets/background/background.png";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

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
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
