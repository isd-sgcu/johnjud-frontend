import MenuButtton from "@/components/Admin/MenuButton";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";

const Admin = () => {
  return (
    <Container className="space-y-8 py-16">
      <h2 className="text-center text-lg">
        Welcome back, <span className="font-bold">admin</span>
      </h2>
      <div className="flex flex-row items-center justify-center gap-16">
        <MenuButtton link="/admin/users" icon="ph:users" text="Users Manager" />
        <MenuButtton
          link="/admin/pets"
          icon="ph:paw-print"
          text="Pets Manager"
        />
      </div>
    </Container>
  );
};

export default Admin;

export const Layout = MainLayout;
