import { PokemonOverview } from '../types/pokemon-overview.type';

export class GetAllPokemonsResponseDto {
  data: PokemonOverview[];
  total: number;
  limit: number;
  offset: number;
}
