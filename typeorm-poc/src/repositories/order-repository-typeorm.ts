import { OrderRepository } from "./order-repository";

export class OrderRepositoryTypeORM implements OrderRepository {
  public async list() {
    return "OrderRepositoryTypeORM";
  }
}
