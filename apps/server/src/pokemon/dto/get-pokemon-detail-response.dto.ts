import { ApiProperty } from '@nestjs/swagger';
import { PokemonOverviewDto } from './pokemon-overview.dto';

export class GetPokemonDetailResponseDto extends PokemonOverviewDto {
  @ApiProperty({
    description: 'Altura del Pokémon en decimetros',
    example: 0.4,
  })
  height: number;

  @ApiProperty({ description: 'Peso del Pokémon en kilogramos', example: 6.0 })
  weight: number;

  @ApiProperty({
    description: 'Habilidades del Pokémon',
    example: ['Static', 'Lightning Rod'],
    type: [String],
  })
  abilities: string[];

  @ApiProperty({
    description: 'Estadísticas del Pokémon',
    example: [
      { name: 'HP', value: 35 },
      { name: 'Attack', value: 55 },
    ],
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'HP' },
        value: { type: 'number', example: 35 },
      },
    },
  })
  stats: {
    name: string;
    value: number;
  }[];
}
