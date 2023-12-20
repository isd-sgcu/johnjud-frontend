import background from "../assets/background/background.png";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`
      }}
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center">
      {children}
    </div>
  );
};

export default MainLayout;
