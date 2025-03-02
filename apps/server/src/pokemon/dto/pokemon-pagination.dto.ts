import { Transform } from 'class-transformer';
import { IsInt, Min, IsOptional } from 'class-validator';

export class PokemonPaginationDto {
  @Transform(({ value }) => Number(value))
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = Number(process.env.DEFAULT_LIMIT);

  @Transform(({ value }) => Number(value))
  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number = 0;
}
