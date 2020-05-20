import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, BaseEntity } from 'typeorm';

@Injectable()
export class BaseCrudService<Entity extends BaseEntity, CreateDto, UpdateDto> {
  constructor(private repository: Repository<Entity>) {}

  async allItems() {
    return this.repository.find();
  }

  async createItem(createDto: CreateDto): Promise<Entity> {
    const item = this.repository.create(createDto);
    await item.save();

    return item;
  }

  async getById(id: string): Promise<Entity> {
    const item = await this.repository.findOne(id);

    if (!item) {
      throw new NotFoundException(`${this.repository.metadata.name} not found`);
    }

    return item;
  }

  async updateItem(id: string, updateDto: UpdateDto): Promise<Entity> {
    const item = await this.getById(id);

    return this.repository.save({ ...item, ...updateDto });
  }

  async deleteItem(id: string): Promise<void> {
    const res = await this.repository.delete(id);

    if (res.affected === 0) {
      throw new NotFoundException(`${this.repository.metadata.name} not found`);
    }
  }
}
