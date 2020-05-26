import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BaseCrudService } from 'src/common/BaseCrud.service';
import { Author } from 'src/authors/author.entity';

@Injectable()
export class BooksService extends BaseCrudService<
  Book,
  CreateBookDto,
  UpdateBookDto
> {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {
    super(bookRepository);
  }

  async createItem({
    authors: authorIds,
    title,
  }: CreateBookDto): Promise<Book> {
    const authors = await this.authorsRepository.findByIds(authorIds);

    if (authors.length !== authorIds.length) {
      throw new NotFoundException('One or more authors were not found');
    }

    const book = this.bookRepository.create({ authors, title });
    await book.save();

    return book;
  }

  async updateItem(
    id: string,
    { authors: authorIds, title }: UpdateBookDto,
  ): Promise<Book> {
    const authors = await this.authorsRepository.findByIds(authorIds || []);

    if (authorIds && authors.length !== authorIds.length) {
      throw new NotFoundException('One or more authors were not found');
    }

    const book = await this.getById(id);

    return this.bookRepository.save({ ...book, title, authors });
  }
}
