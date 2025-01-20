import { OrderRepository } from "../repositories/order-repository";

export class OrderService {
  private readonly orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async list() {
    return this.orderRepository.list();
  }
}
