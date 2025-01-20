import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./order";

@Entity("tb_order_items")
export class OrderItems {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  produto!: string;

  @Column("int")
  quantidade!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  precoUnitario!: number;

  @ManyToOne(() => Order, (order) => order.itens, { onDelete: "CASCADE" })
  order!: Order;
}
