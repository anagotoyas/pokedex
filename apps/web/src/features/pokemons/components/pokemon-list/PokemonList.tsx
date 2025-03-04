import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';
import { Flex } from '@mantine/core';
import { PokemonCard } from '../pokemon-card';
import { Pagination } from '../../../../shared/ui/pagination/pagination';
import { usePokemonStore } from '../../../../store/pokemon.store';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();
  const { filters, setFilters } = usePokemonStore();
  console.log('filters', filters);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data?.data && (
        <>
          <Flex wrap="wrap" gap={32} rowGap={72} mt={60} justify="center">
            {data.data.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </Flex>
          <Pagination
            total={data.total}
            limit={filters?.limit}
            setLimit={(limit) => setFilters({ limit, offset: 0 })}
            value={Math.floor((filters.offset ?? 0) / (filters.limit ?? 1)) + 1}
            onChange={(page) =>
              setFilters({ offset: (page - 1) * (filters.limit ?? 1) })
            }
          />
        </>
      )}
    </>
  );
};
