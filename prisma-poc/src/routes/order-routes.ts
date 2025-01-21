import { FastifyInstance } from "fastify";
import { OrderController } from "../controller/order-controller";
import { OrderService } from "../services/order-service";
import { OrderRepository } from "../repository/order-repository";

export async function orderRoutes(app: FastifyInstance) {
  const orderService = new OrderService(new OrderRepository());
  const orderController = new OrderController(orderService);

  app.post("/orders", orderController.createOrder.bind(orderController));
  app.get("/orders/:id", orderController.getOrderById.bind(orderController));
}
