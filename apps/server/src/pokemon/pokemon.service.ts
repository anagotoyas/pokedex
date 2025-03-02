import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pokemon } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.pokeApiUrl = this.configService.get<string>('app.pokeUrl');
  }
  async findAll(limit: number, offset: number): Promise<Pokemon[]> {
    const response = await fetch(
      `${this.pokeApiUrl}?limit=${limit}&offset=${offset}`,
    );
    return response.json();
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
