import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAuthorDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;
}
