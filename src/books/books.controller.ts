import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.booksService.getById(id);
  }

  @Patch('/:id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
