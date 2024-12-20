import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(5)
  name: string;

  @Min(1)
  @IsPositive()
  @IsInt()
  no: number;
}
