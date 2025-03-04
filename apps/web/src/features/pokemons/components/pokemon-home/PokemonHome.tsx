import { usePokemonStore } from '../../../../store/pokemon.store';
import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';
import { PokemonList } from '../pokemon-list';
import { PokemonModal } from '../pokemon-modal/PokemonModal';

export const PokemonHome = () => {
  const { data: pokemons, isLoading } = useFetchPokemons();
  const { filters, setFilters } = usePokemonStore();

  const handlePageChange = (page: number) =>
    setFilters({ offset: (page - 1) * (filters.limit ?? 1) });

  const handleLimitChange = (limit: number) => setFilters({ limit, offset: 0 });

  return (
    <div>
      <PokemonList
        pokemons={pokemons?.data}
        total={pokemons?.total}
        filters={filters}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
        isLoading={isLoading}
      />
      <PokemonModal />
    </div>
  );
};
