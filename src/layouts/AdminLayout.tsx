import background from "@/assets/background/background.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useAuthStore from "@/store/authStore";
import { Toaster } from "react-hot-toast";

type MainLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: MainLayoutProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="flex min-h-screen flex-col overflow-y-scroll bg-auto bg-top"
      >
        <Navbar />
        <div className="my-6 space-y-6 xl:my-10 xl:space-y-10">
          {isLoggedIn && children}
        </div>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default AdminLayout;
