import { useFetchPokemons } from '../../hooks/useFetchPokemons.hook';

export const PokemonList = () => {
  const { data, isLoading } = useFetchPokemons();
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
