import { usePageParams } from '../../../hooks/usePageParams';
import MainLayout from '../../../layouts/MainLayout';

// Page
const ExampleParamPage = () => {
  const param = usePageParams(['id']);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl">ExampleParamPage</h2>
      <div>{param.id}</div>
    </div>
  );
};

export default ExampleParamPage;

// Layout
export const Layout = MainLayout;
