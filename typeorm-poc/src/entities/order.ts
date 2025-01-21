import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { ShippingAddress } from "./shipping-address";
import { OrderItems } from "./order-items";

@Entity("tb_orders")
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  client!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  totalPrice!: number;

  @Column("varchar", { default: "Pendente" })
  status!: string;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => ShippingAddress, { cascade: true })
  @JoinColumn()
  shippingAddress!: ShippingAddress;

  @OneToMany(() => OrderItems, (orderItem) => orderItem.order, { cascade: true })
  items!: OrderItems[];
}
