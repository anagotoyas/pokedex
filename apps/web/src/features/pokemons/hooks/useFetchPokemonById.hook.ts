import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../services/pokemon.services';
import { usePokemonStore } from '../../../store/pokemon.store';

export const useFetchPokemonById = () => {
  const { selectedPokemon } = usePokemonStore();

  return useQuery({
    queryKey: ['pokemonDetail', selectedPokemon],
    enabled: !!selectedPokemon,
    queryFn: () =>
      selectedPokemon !== null
        ? getPokemonById(selectedPokemon)
        : Promise.reject('No Pokemon selected'),
  });
};
