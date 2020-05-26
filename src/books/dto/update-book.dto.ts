import { Matches, IsArray, IsOptional } from 'class-validator';
import { uuidPattern } from 'src/common/uuid-pattern.constant';

export class UpdateBookDto {
  title: string;

  @IsOptional()
  @IsArray()
  @Matches(uuidPattern, { each: true, message: 'Invalid authorId provided' })
  authors: string[] | undefined;
}
