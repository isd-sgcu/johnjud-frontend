import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

// Page
const NotFound = () => {
  return (
    <Container className="flex min-h-[70dvh] flex-col items-center justify-center gap-8">
      <div className="space-y-2">
        <h1 className="text-center text-6xl font-bold">404</h1>
        <h2 className="text-center">ไม่พบหน้านี้</h2>
      </div>
      <Link to="/home">
        <Button text="กลับสู่หน้าหลัก" variant="primary" rounded="2xl" />
      </Link>
    </Container>
  );
};

export default NotFound;

// Layout
export const Layout = MainLayout;
