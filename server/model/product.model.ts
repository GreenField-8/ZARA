import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  image!: string;
  @Column()
  description!: string;

  @Column()
  category!: string;

  @Column() 
  price!: string;

  @Column()
  status!: number;
}
