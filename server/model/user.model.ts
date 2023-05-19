import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Cart } from "./cart.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    unique: true
  })
  email!: string;

  @Column()
  password!: string;

  @OneToOne(() => Cart, { eager: true })
    @JoinColumn()
    cart!: Cart;

    

}
