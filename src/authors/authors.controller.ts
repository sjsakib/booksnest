import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BaseCrudController } from 'src/common/BaseCrud.controller';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';
import { IdValidationPipe } from 'src/common/id-validation.pipe';

@Controller('authors')
export class AuthorsController extends BaseCrudController<
  Author,
  CreateAuthorDto,
  UpdateAuthorDto,
  AuthorsService
> {
  constructor(private authorsService: AuthorsService) {
    super(authorsService);
  }

  @Get()
  books() {
    return this.authorsService.allItems();
  }

  @Post()
  createBook(@Body() createItemDto: CreateAuthorDto) {
    return this.authorsService.createItem(createItemDto);
  }

  @Get('/:id')
  getById(@Param('id', IdValidationPipe) id: string) {
    return this.authorsService.getById(id);
  }

  @Patch('/:id')
  updateItem(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateItemDto: UpdateAuthorDto,
  ) {
    return this.authorsService.updateItem(id, updateItemDto);
  }

  @Delete('/:id')
  delete(@Param('id', IdValidationPipe) id: string) {
    return this.authorsService.deleteItem(id);
  }
}
