import { OrderRepositoryPrisma } from "./../repositories/order-repository-prisma";
import { OrderController } from "../controllers/order-controller";
import { OrderService } from "../services/order-service";

export function buildOrderController() {
  const orderRepository = new OrderRepositoryPrisma();
  const orderService = new OrderService(orderRepository);
  return new OrderController(orderService);
}
