export type PokemonOverview = {
  id: number;
  name: string;
  types: PokemonType[];
  img: string;
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass';

export type PokemonStat =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

export type PokemonDetailed = {
  id: number;
  name: string;
  types: PokemonType[];
  img: string;
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    name: PokemonStat;
    value: number;
  }[];
};
