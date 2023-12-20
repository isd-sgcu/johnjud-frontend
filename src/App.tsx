import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function AppRoot() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col justify-center items-center">Loading...</div>
      }>
      <RouterProvider router={router} />
    </Suspense>
  );
}

function App() {
  return (
    <StrictMode>
      <AppRoot />
    </StrictMode>
  );
}

export default App;
