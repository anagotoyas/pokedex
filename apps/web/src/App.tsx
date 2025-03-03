import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './routes/router.routes';

function App() {
  return <RouterProvider router={Router()} />;
}

export default App;
