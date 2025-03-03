import { RouterProvider } from 'react-router-dom';
import { Router } from './routes/router.routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={Router()} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
