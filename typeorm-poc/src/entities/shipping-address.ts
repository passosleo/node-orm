import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tb_shipping_address")
export class ShippingAddress {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  street!: string;

  @Column("varchar")
  number!: string;

  @Column("varchar")
  complement?: string;

  @Column("varchar")
  neighboorhood!: string;

  @Column("varchar")
  city!: string;

  @Column("varchar")
  state!: string;

  @Column("varchar", { length: 11})
  zipCode!: string;
}
