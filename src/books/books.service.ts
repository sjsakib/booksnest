import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async allBooks() {
    return this.bookRepository.find();
  }

  async createBook(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create();
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    await book.save();

    return book;
  }

  async getById(id: string) {
    try {
      return await this.bookRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException('Book not found');
    }
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.getById(id);

    return this.bookRepository.save({ ...book, ...updateBookDto });
  }

  async deleteBook(id: string): Promise<void> {
    const res = await this.bookRepository.delete(id);

    if (res.affected === 0) {
      throw new NotFoundException('Book not found');
    }
  }
}
