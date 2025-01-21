import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateOrderDTO } from '../services/order-types';
import { OrderService } from '../services/order-service';

export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  async createOrder(request: FastifyRequest<{ Body: CreateOrderDTO }>, reply: FastifyReply) {
    try {
      const data = request.body;
      const order = await this.orderService.createOrder(data);
      return reply.status(201).send(order);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao criar o pedido.' });
    }
  }

  // Endpoint para buscar pedido por ID
  async getOrderById(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    try {
      const { id } = request.params;
      const order = await this.orderService.findOrderById(id);
      if (!order) {
        return reply.status(404).send({ error: 'Pedido não encontrado.' });
      }
      return reply.status(200).send(order);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: 'Erro ao buscar o pedido.' });
    }
  }
}