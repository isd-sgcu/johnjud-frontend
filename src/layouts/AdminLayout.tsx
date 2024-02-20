import background from "@/assets/background/background.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useRefreshToken from "@/hooks/auth/useRefreshToken";
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type MainLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const { isLoggedIn, refreshToken, validateSession } = useAuthStore();
  const { mutate } = useRefreshToken();

  useEffect(() => {
    if (isLoggedIn == false) {
      navigate("/admin");
    }

    if (isLoggedIn && refreshToken && validateSession()) {
      mutate({ refresh_token: refreshToken });
    }
  }, [isLoggedIn]);

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
