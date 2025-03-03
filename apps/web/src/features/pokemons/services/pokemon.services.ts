import client from '../../../api/client';
import { PokemonOverview } from '../types';

export type FetchPokemonsResponse = {
  data: PokemonOverview[];
  total: number;
  limit: number;
  offset: number;
};

export const fetchPokemons = async () => {
  const reponse = await client.get<FetchPokemonsResponse>('/pokemon');
  return reponse.data;
};
