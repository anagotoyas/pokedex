import { Transform } from 'class-transformer';
import { IsInt, Min, IsOptional, IsString } from 'class-validator';

export class PaginationDto {
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

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsOptional()
  search?: string;
}
