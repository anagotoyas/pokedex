import { RouteObject } from 'react-router-dom';
import { Layout } from '../shared/layout';
import { PokemonHome } from '../features/pokemons/components/pokemon-home';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <PokemonHome />,
      },
    ],
  },
];
