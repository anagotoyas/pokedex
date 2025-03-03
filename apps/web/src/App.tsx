import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './routes/router.routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router()} />;
    </QueryClientProvider>
  );
}

export default App;
