import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { createRouter } from './appRouter.tsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={createRouter()} />
    </Suspense>
  );
}

export default App;
