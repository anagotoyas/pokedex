import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';
import { Flex } from '@mantine/core';
import { PokemonCard } from '../pokemon-card';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data?.data && (
        <Flex wrap="wrap" gap={32} rowGap={72} mt={60} justify="center">
          {data.data.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Flex>
      )}
    </div>
  );
};
