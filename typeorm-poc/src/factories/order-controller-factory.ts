import { OrderRepositoryTypeORM } from "../repositories/order-repository-typeorm";
import { OrderController } from "../controllers/order-controller";
import { OrderService } from "../services/order-service";

export function buildOrderController() {
  const orderRepository = new OrderRepositoryTypeORM();
  const orderService = new OrderService(orderRepository);
  return new OrderController(orderService);
}
