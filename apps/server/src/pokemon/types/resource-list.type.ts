export type ResourceList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonResource[];
};

export type PokemonResource = {
  name: string;
  url: string;
};
