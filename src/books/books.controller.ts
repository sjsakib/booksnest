import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BaseCrudController } from 'src/common/BaseCrud.controller';
import { Book } from './book.entity';

@Controller('books')
export class BooksController extends BaseCrudController<
  Book,
  CreateBookDto,
  UpdateBookDto,
  BooksService
> {
  constructor(booksService: BooksService) {
    super(booksService);
  }
}
