import { RouteObject } from 'react-router-dom';
import { Layout } from '../layout';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <div>Home</div>,
      },
    ],
  },
];
