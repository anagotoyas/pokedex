import { Controller, Get, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { GetAllPokemonsResponseDto } from './dto/get-all-pokemons-response.dto';
import { PaginationDto } from 'src/core/dtos/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAll(
    @Query() query: PaginationDto,
  ): Promise<GetAllPokemonsResponseDto> {
    return this.pokemonService.filterPokemons(query);
  }
}
