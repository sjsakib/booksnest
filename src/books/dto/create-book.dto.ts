import { IsNotEmpty, Matches, IsArray, ArrayNotEmpty } from 'class-validator';
import { uuidPattern } from 'src/common/uuid-pattern.constant';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  @Matches(uuidPattern, { each: true, message: 'Invalid authorId pro' })
  authors: string[];
}
