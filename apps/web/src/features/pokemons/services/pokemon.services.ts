import client from '../../../api/client';
import { Filter } from '../../../shared/types';
import { PokemonOverview } from '../types';

export type FetchPokemonsResponse = {
  data: PokemonOverview[];
  total: number;
  limit: number;
  offset: number;
};

export const fetchPokemons = async (filters?: Filter) => {
  const reponse = await client.get<FetchPokemonsResponse>('/pokemon', {
    params: filters,
  });
  return reponse.data;
};
