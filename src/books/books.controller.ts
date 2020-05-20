import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  books() {
    return this.booksService.allBooks();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }
}
