import { Order } from "../entities/order";
import { OrderRepository } from "../repository/order-repository";
import { CreateOrderDTO } from "./order-types";

export class OrderService {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(
    data: CreateOrderDTO
  ): Promise<Order> {
    return this.orderRepository.createOrderTransaction(data);
  }

  async findOrderById(id: number): Promise<Order | null> {
    return this.orderRepository.findById(id);
  }
}
