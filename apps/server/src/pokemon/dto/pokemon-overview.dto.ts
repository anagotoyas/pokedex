import { ApiProperty } from '@nestjs/swagger';

export class PokemonOverviewDto {
  @ApiProperty({ description: 'ID único del Pokémon', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nombre del Pokémon', example: 'Pikachu' })
  name: string;

  @ApiProperty({
    description: 'Tipos del Pokémon',
    example: ['Electric'],
    type: [String],
  })
  types: string[];

  @ApiProperty({
    description: 'URL de la imagen del Pokémon',
    example: 'https://example.com/pikachu.png',
  })
  img: string;
}
