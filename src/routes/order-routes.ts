import { FastifyInstance } from "fastify";
import { buildOrderController } from "../factories/order-controller-factory";

export async function orderRoutes(app: FastifyInstance) {
  const controller = buildOrderController();

  app.get("/api/v1/orders", controller.listOrders);
}
