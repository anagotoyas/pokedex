import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../services/pokemon.services';

export const useFetchPokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: () => fetchPokemons(),
  });
};
