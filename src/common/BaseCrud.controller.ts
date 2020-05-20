import { Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BaseEntity } from 'typeorm';
import { BaseCrudService } from './BaseCrud.service';
import { IdValidationPipe } from './id-validation.pipe';

export class BaseCrudController<
  Entity extends BaseEntity,
  CreateDto,
  UpdateDto,
  Service extends BaseCrudService<Entity, CreateDto, UpdateDto>
> {
  constructor(private crudService: Service) {}

  @Get()
  books() {
    return this.crudService.allItems();
  }

  @Post()
  createItem(@Body() createItemDto: CreateDto) {
    return this.crudService.createItem(createItemDto);
  }

  @Get('/:id')
  getById(@Param('id', IdValidationPipe) id: string) {
    return this.crudService.getById(id);
  }

  @Patch('/:id')
  updateItem(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateItemDto: UpdateDto,
  ) {
    return this.crudService.updateItem(id, updateItemDto);
  }

  @Delete('/:id')
  delete(@Param('id', IdValidationPipe) id: string) {
    return this.crudService.deleteItem(id);
  }
}
