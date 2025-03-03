import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppRoutes } from './app.router';

export const Router = () => {
  return createBrowserRouter([
    ...AppRoutes,
    {
      path: '*',
      children: [
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);
};
