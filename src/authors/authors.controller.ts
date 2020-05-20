import { Controller } from '@nestjs/common';
import { BaseCrudController } from 'src/common/BaseCrud.controller';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController extends BaseCrudController<
  Author,
  CreateAuthorDto,
  UpdateAuthorDto,
  AuthorsService
> {
  constructor(authorsService: AuthorsService) {
    super(authorsService);
  }
}
