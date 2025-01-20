import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { ShippingAddress } from "./shipping-address";
import { OrderItems } from "./order-items";

@Entity("tb_orders")
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cliente!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  valorTotal!: number;

  @Column({ default: "pendente" })
  status!: string;

  @CreateDateColumn()
  criadoEm!: Date;

  @UpdateDateColumn()
  atualizadoEm!: Date;

  @OneToOne(() => ShippingAddress, { cascade: true })
  @JoinColumn()
  enderecoEntrega!: ShippingAddress;

  @OneToMany(() => OrderItems, (orderItem) => orderItem.order, { cascade: true })
  itens!: OrderItems[];
}
