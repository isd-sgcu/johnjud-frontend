import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

type GameLayoutProps = {
  children: React.ReactNode;
};

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-primary-variant bg-auto bg-top">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default GameLayout;
