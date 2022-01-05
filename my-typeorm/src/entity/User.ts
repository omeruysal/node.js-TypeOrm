import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  age: number;
}
