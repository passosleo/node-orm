import { OrderRepository } from "./order-repository";

export class OrderRepositoryPrisma implements OrderRepository {
  public async list() {
    return "OrderRepositoryPrisma";
  }
}
