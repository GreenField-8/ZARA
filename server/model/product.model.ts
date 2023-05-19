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
    category!: number;

    @Column() 
    price!: string;

    @Column()
    status!: number;
  cart: any;
}