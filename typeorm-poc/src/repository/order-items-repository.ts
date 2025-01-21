import { Repository } from "typeorm";
import { OrderItems } from "../entities/order-items";
import { AppDataSource } from "../db/datasource";

export class OrderItemsRepository {
  private repository: Repository<OrderItems>;

  constructor() {
    this.repository = AppDataSource.getRepository(OrderItems);
  }

  async create(items: OrderItems[]): Promise<OrderItems[]> {
    return this.repository.save(items);
  }
}
