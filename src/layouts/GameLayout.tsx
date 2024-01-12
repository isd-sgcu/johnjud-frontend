import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type GameLayoutProps = {
  children: React.ReactNode;
};

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <div
      className="flex min-h-screen flex-col bg-auto bg-top bg-primary-variant"
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default GameLayout;
