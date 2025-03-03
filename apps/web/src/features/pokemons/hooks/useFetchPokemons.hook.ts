import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../services/pokemon.services';
import { usePokemonStore } from '../../../store/pokemon.store';

export const useFetchPokemons = () => {
  const { filters } = usePokemonStore();

  return useQuery({
    queryKey: ['pokemons', filters],
    queryFn: () => fetchPokemons(filters),
  });
};
