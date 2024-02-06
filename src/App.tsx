import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import PetList from "./components/Card/PetList.tsx";
import { router } from "./routes";


function AppRoot() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col items-center justify-center">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <PetList />
        <AppRoot />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
