export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
}

export interface PokemonAbility {
  ability: { name: string };
}

export interface PokemonType {
  type: { name: string };
}
