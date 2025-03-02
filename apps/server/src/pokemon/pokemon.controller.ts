import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonPaginationDto } from './dto/pokemon-pagination.dto';
import { Pokemon } from './interfaces/pokemon.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAll(
    @Query() paginationDto: PokemonPaginationDto,
  ): Promise<Pokemon[]> {
    return this.pokemonService.findAll(
      paginationDto.limit,
      paginationDto.offset,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }
}
