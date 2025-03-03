import { useEffect } from 'react';
import { usePokemonStore } from '../../../../store/pokemon.store';
import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';
import { SearchBar } from '../../../../shared/ui/search-bar/SearchBar';
import { Flex } from '@mantine/core';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();
  const { setFilters, filters } = usePokemonStore();
  useEffect(() => {
    setFilters({ limit: 20, offset: 0 });
  }, [setFilters]);
  return (
    <div>
      <Flex justify="center" mt={16}>
        <SearchBar
          value={filters?.search}
          onChange={(value) => setFilters({ search: value })}
        />
      </Flex>
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
