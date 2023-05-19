import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.model";
import { Product } from "./product.model";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, user => user.cart)
  user!: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products!: Product[];
}
