import { RouteObject } from 'react-router-dom';
import { Layout } from '../shared/layout';
import { PokemonList } from '../features/pokemons/components/pokemon-list';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <PokemonList />,
      },
    ],
  },
];
