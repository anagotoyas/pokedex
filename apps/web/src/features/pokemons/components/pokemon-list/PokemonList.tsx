import { useEffect } from 'react';
import { usePokemonStore } from '../../../../store/pokemon.store';
import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();
  const { setFilters } = usePokemonStore();
  useEffect(() => {
    setFilters({ limit: 20, offset: 10, search: 'pikachu' });
  }, [setFilters]);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data?.data && (
        <ul>
          {data.data.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
