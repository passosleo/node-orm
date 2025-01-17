import { FastifyReply, FastifyRequest } from "fastify";
import { OrderService } from "../services/order-service";

export class OrderController {
  private readonly orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  public listOrders = async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const data = await this.orderService.list();

      res.send(data);
    } catch (e) {
      console.error(e);
      res.send("Internal Server Error");
    }
  };
}
