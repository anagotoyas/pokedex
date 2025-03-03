import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { GetAllPokemonsResponseDto } from './dto/get-all-pokemons-response.dto';
import { PaginationDto } from 'src/core/dtos/pagination.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { GetPokemonDetailResponseDto } from './dto/get-pokemon-detail-response.dto';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Pokémon' })
  @ApiResponse({
    status: 200,
    description: 'Lista de Pokémon obtenida exitosamente',
    type: GetAllPokemonsResponseDto,
  })
  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
    description: 'Buscar Pokémon por nombre',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Límite de resultados por página',
  })
  @ApiQuery({
    name: 'offset',
    type: Number,
    required: false,
    description: 'Número de resultados a omitir',
  })
  async getAll(
    @Query() query: PaginationDto,
  ): Promise<GetAllPokemonsResponseDto> {
    return this.pokemonService.filterPokemons(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalles de un Pokémon por ID' })
  @ApiResponse({
    status: 200,
    description: 'Detalles del Pokémon obtenidos exitosamente',
    type: GetPokemonDetailResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Pokémon no encontrado' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del Pokémon' })
  async getOne(@Param('id') id: string): Promise<GetPokemonDetailResponseDto> {
    return this.pokemonService.getPokemonDetails(Number(id));
  }
}
