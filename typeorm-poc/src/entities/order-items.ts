import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./order";

@Entity("tb_order_items")
export class OrderItems {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  productName!: string;

  @Column("int")
  quantity!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  unitPrice!: number;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: "CASCADE" })
  order!: Order;
}
