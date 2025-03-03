import { ApiProperty } from '@nestjs/swagger';
import { PokemonOverviewDto } from './pokemon-overview.dto';

export class GetAllPokemonsResponseDto {
  @ApiProperty({
    description: 'Lista de Pokémon',
    type: [PokemonOverviewDto],
  })
  data: PokemonOverviewDto[];

  @ApiProperty({ description: 'Número total de Pokémon', example: 100 })
  total: number;

  @ApiProperty({
    description: 'Límite de resultados por página',
    example: 10,
  })
  limit: number;

  @ApiProperty({
    description: 'Desplazamiento para la paginación',
    example: 0,
  })
  offset: number;
}
