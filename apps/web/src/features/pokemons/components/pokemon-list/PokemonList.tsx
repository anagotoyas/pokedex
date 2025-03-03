import { useEffect } from 'react';
import { usePokemonStore } from '../../../../store/pokemon.store';
import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';
import { SearchBar } from '../../../../shared/ui/search-bar/SearchBar';
import { Flex } from '@mantine/core';
import { PokemonCard } from '../pokemon-card';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();
  const { setFilters, filters } = usePokemonStore();
  useEffect(() => {
    setFilters({ limit: 20, offset: 0 });
  }, [setFilters]);
  return (
    <div>
      <Flex justify="start" mt={16}>
        <SearchBar
          value={filters?.search}
          placeholder="Search your pokemon!"
          onChange={(value) => setFilters({ search: value })}
        />
      </Flex>
      {isLoading && <p>Loading...</p>}
      {data?.data && (
        <Flex wrap="wrap" gap={32} rowGap={82} mt={60} justify="center">
          {data.data.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Flex>
      )}
    </div>
  );
};
