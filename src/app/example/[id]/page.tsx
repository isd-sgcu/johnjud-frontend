import { usePageParams } from "../../../hooks/usePageParams";
import MainLayout from "../../../layouts/MainLayout";

// Page
const ExampleParamPage = () => {
  const param = usePageParams(["id"]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">ExampleParamPage</h2>
      <div>{param.id}</div>
    </div>
  );
};

export default ExampleParamPage;

// Layout
export const Layout = MainLayout;
