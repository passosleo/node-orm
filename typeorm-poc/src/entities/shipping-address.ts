import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tb_shipping_address")
export class ShippingAddress {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rua!: string;

  @Column()
  numero!: string;

  @Column()
  complemento?: string;

  @Column()
  bairro!: string;

  @Column()
  cidade!: string;

  @Column()
  estado!: string;

  @Column()
  cep!: string;
}
