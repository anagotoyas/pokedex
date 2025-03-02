import { Inject, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { GetAllPokemonsResponseDto } from './dto/get-all-pokemons-response.dto';
import { ConfigService } from '@nestjs/config';
import { PaginationDto } from 'src/core/dtos/pagination.dto';
import { Pokemon, PokemonOverview, Resource } from './types';
import { GetPokemonDetailResponseDto } from './dto/get-pokemon-detail-response.dto';

const TTL_24_HOURS = 86400;
const TOTAL_POKEMON = 1304;

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl: string;
  private readonly logger = new Logger(PokemonService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.pokeApiUrl = this.configService.get('POKE_API_URL');
  }

  async getAllPokemon(): Promise<Resource[]> {
    const cacheKey = 'all-pokemon';
    const cachedPokemon = await this.cacheManager.get<Resource[]>(cacheKey);

    if (cachedPokemon) {
      return cachedPokemon;
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.pokeApiUrl}?limit=${TOTAL_POKEMON}`),
      );
      const allPokemon = response.data.results;

      await this.cacheManager.set(cacheKey, allPokemon, TTL_24_HOURS);
      return allPokemon;
    } catch (error) {
      this.logger.error('Failed to fetch Pokémon list', error.stack);
      throw new Error('Failed to fetch Pokémon list');
    }
  }

  async filterPokemons(
    query: PaginationDto,
  ): Promise<GetAllPokemonsResponseDto> {
    const { limit, offset, search } = query;

    const cacheKey = `filter-pokemons:${JSON.stringify(query)}`;

    const cachedResult =
      await this.cacheManager.get<GetAllPokemonsResponseDto>(cacheKey);

    if (cachedResult) return cachedResult;

    try {
      let allPokemon = await this.cacheManager.get<Resource[]>('all-pokemon');

      if (!allPokemon) allPokemon = await this.getAllPokemon();

      if (search !== undefined) {
        allPokemon = allPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      const total = allPokemon.length;

      const paginatedPokemon = allPokemon.slice(offset, offset + limit);

      const pokemonDetails = await Promise.all(
        paginatedPokemon.map(
          async (pokemon) => await this.getPokemonByName(pokemon.name),
        ),
      );

      const result: GetAllPokemonsResponseDto = {
        data: pokemonDetails,
        total,
        limit,
        offset,
      };

      await this.cacheManager.set(cacheKey, result, TTL_24_HOURS);

      return result;
    } catch (error) {
      this.logger.error('Failed to filter Pokémon', error.stack);
      throw new Error('Failed to filter Pokémon');
    }
  }

  async getPokemonByName(name: string): Promise<PokemonOverview> {
    const cacheKey = `pokemon-details:${name}`;
    const cachedDetails =
      await this.cacheManager.get<PokemonOverview>(cacheKey);

    if (cachedDetails) return cachedDetails;

    try {
      const response = await firstValueFrom(
        this.httpService.get<Pokemon>(`${this.pokeApiUrl}/${name}`),
      );

      const details: PokemonOverview = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((obj) => obj.type.name),
        img: response.data.sprites.front_default,
      };

      await this.cacheManager.set(cacheKey, details, TTL_24_HOURS);

      return details;
    } catch (error) {
      this.logger.error(`Failed to fetch Pokémon ${name}`, error.stack);
      throw new Error(`Failed to fetch Pokémon ${name}`);
    }
  }

  async getPokemonDetails(id: number): Promise<GetPokemonDetailResponseDto> {
    try {
      const cacheKey = `pokemon-full:${id}`;
      const cachedDetails =
        await this.cacheManager.get<GetPokemonDetailResponseDto>(cacheKey);

      if (cachedDetails) return cachedDetails;
      const response = await firstValueFrom(
        this.httpService.get<Pokemon>(`${this.pokeApiUrl}/${id}`),
      );

      const results = {
        id: response.data.id,
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        abilities: response.data.abilities.map((obj) => obj.ability.name),
        types: response.data.types.map((obj) => obj.type.name),
        img: response.data.sprites.front_default,
        stats: response.data.stats.map((obj) => ({
          name: obj.stat.name,
          value: obj.base_stat,
        })),
      };

      await this.cacheManager.set(cacheKey, results, TTL_24_HOURS);

      return results;
    } catch (error) {
      this.logger.error(`Failed to fetch Pokémon with ID: ${id}`, error.stack);
      throw new Error(`Failed to fetch Pokémon with ID: ${id}`);
    }
  }
}
