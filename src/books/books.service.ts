import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  allBooks() {
    return 'All books';
  }

  async createBook(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create();
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    await book.save();

    return book;
  }
}
