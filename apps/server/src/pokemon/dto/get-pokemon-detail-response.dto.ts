export class GetPokemonDetailResponseDto {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
  img: string;
  stats: {
    name: string;
    value: number;
  }[];
}
