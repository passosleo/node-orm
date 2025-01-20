import { DataSource } from "typeorm";
import { Order } from "../entities/order";
import { ShippingAddress } from "../entities/shipping-address";
import { OrderItems } from "../entities/order-items";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432 ,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: true,
  entities: [Order, ShippingAddress, OrderItems]
});