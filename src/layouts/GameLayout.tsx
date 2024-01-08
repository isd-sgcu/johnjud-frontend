import background from "@/assets/background/background.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type GameLayoutProps = {
  children: React.ReactNode;
};

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="flex min-h-screen flex-col bg-auto bg-top"
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default GameLayout;
