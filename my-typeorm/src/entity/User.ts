import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tweet } from './Tweet';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 200 })
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  age: number;

  @OneToMany((type) => Tweet, (tweet) => tweet.user)
  tweets: Promise<Tweet[]>;
}
