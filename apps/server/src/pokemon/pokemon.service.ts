import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from 'src/core/app.config';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl: string;

  constructor(
    @Inject('app') private readonly configService: ConfigType<typeof appConfig>,
  ) {
    this.pokeApiUrl = this.configService.pokeUrl;
  }
  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
