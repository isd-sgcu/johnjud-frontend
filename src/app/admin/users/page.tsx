import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/layouts/MainLayout";
import { Icon } from "@iconify/react";

const Users = () => {
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      email: "cody.fisher@example.com",
    },
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      email: "cody.fisher@example.com",
    },
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      email: "cody.fisher@example.com",
    },
    // More people...
  ];

  return (
    <Container className="space-y-6">
      <div className="flex flex-row justify-between gap-8">
        <h2 className="text-2xl font-bold">Users Manager</h2>
        <Button text="Add User" variant="primary" rounded="full" />
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-accent-gray"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-accent-gray"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-accent-gray"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-accent-gray"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr
                      key={person.email}
                      className={
                        personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-accent-gray">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-accent-gray">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-accent-gray">
                        {person.role}
                      </td>
                      <td className="space-x-6 whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-primary hover:brightness-95"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-accent-red hover:brightness-95"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:brightness-95"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:brightness-95"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md border border-accent-light-gray bg-white px-2 py-2 text-sm font-medium text-accent-gray hover:brightness-95"
              >
                <span className="sr-only">Previous</span>
                <Icon
                  icon="ph:caret-left"
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-accent-light-gray text-accent-gray hover:brightness-95" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center border border-primary bg-primary bg-opacity-15 px-4 py-2 text-sm font-medium text-primary"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-accent-gray hover:brightness-95"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-accent-gray hover:brightness-95 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-accent-gray hover:brightness-95 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-accent-gray hover:brightness-95"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center border border-accent-light-gray bg-white px-4 py-2 text-sm font-medium text-accent-gray hover:brightness-95"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md border border-accent-light-gray bg-white px-2 py-2 text-sm font-medium text-accent-gray hover:brightness-95"
              >
                <span className="sr-only">Next</span>
                <Icon
                  icon="ph:caret-right"
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Users;

export const Layout = MainLayout;
