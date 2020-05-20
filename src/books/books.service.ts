import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BaseCrudService } from 'src/common/BaseCrud.service';

@Injectable()
export class BooksService extends BaseCrudService<
  Book,
  CreateBookDto,
  UpdateBookDto
> {
  constructor(@InjectRepository(Book) bookRepository: Repository<Book>) {
    super(bookRepository);
  }
}
