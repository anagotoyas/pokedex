import { PokemonStat } from './stat.type';
import { PokemonType } from './pokemon-type.type';
import { Resource } from './resource.type';
import { Ability } from './ability.type';
import { Sprites } from './sprites.type';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: object[];
  game_indices: object[];
  held_items: object[];
  location_area_encounters: string;
  moves: object[];
  past_types: object[];
  sprites: Sprites;
  species: Resource;
  stats: PokemonStat[];
  types: PokemonType[];
}
