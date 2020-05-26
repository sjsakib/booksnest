import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BaseCrudController } from 'src/common/BaseCrud.controller';
import { Book } from './book.entity';
import { IdValidationPipe } from 'src/common/id-validation.pipe';

@Controller('books')
export class BooksController extends BaseCrudController<
  Book,
  CreateBookDto,
  UpdateBookDto,
  BooksService
> {
  constructor(private booksService: BooksService) {
    super(booksService);
  }

  @Get()
  books() {
    return this.booksService.allItems();
  }

  @Post()
  createBook(@Body() createItemDto: CreateBookDto) {
    return this.booksService.createItem(createItemDto);
  }

  @Get('/:id')
  getById(@Param('id', IdValidationPipe) id: string) {
    return this.booksService.getById(id);
  }

  @Patch('/:id')
  updateItem(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateItemDto: UpdateBookDto,
  ) {
    return this.booksService.updateItem(id, updateItemDto);
  }

  @Delete('/:id')
  delete(@Param('id', IdValidationPipe) id: string) {
    return this.booksService.deleteItem(id);
  }
}
