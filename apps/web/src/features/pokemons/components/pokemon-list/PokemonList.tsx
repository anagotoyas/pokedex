import { Flex } from '@mantine/core';
import { PokemonCard } from '../pokemon-card';
import { PokemonOverview } from '../../types';
import { PokemonListSkeleton } from './components/pokemon-list-skeleton';
import { Pagination } from '../../../../shared/ui/pagination';

interface PokemonListProps {
  pokemons?: PokemonOverview[];
  total?: number;
  filters: { limit?: number; offset?: number };
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  isLoading?: boolean;
}

export const PokemonList = ({
  pokemons,
  total,
  filters,
  onPageChange,
  onLimitChange,
  isLoading,
}: PokemonListProps) => {
  if (isLoading || !pokemons || !total) {
    return <PokemonListSkeleton />;
  }

  return (
    <>
      <Flex wrap="wrap" gap={32} rowGap={72} mt={60} justify="center">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>
      <Pagination
        total={total ?? 0}
        limit={filters?.limit}
        setLimit={onLimitChange}
        value={Math.floor((filters.offset ?? 0) / (filters.limit ?? 1)) + 1}
        onChange={onPageChange}
      />
    </>
  );
};
