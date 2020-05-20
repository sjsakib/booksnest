import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
