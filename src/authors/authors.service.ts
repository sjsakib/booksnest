import { Injectable } from '@nestjs/common';
import { BaseCrudService } from 'src/common/BaseCrud.service';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService extends BaseCrudService<
  Author,
  CreateAuthorDto,
  UpdateAuthorDto
> {
  constructor(@InjectRepository(Author) repository: Repository<Author>) {
    super(repository);
  }
}
