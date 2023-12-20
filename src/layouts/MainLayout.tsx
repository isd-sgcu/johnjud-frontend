type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="min-h-screen flex flex-col justify-center items-center">{children}</div>;
};

export default MainLayout;
