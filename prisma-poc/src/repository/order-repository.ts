import { Order, OrderItems } from "@prisma/client";
import { CreateOrderDTO } from "../services/order-types";
import { prisma } from "../db/prisma";

export class OrderRepository {
  async createOrderTransaction(
    data: CreateOrderDTO
  ): Promise<Order & { items: OrderItems[] }> {
    return prisma.$transaction(async (trx) => {
      const { client, items: orderItems, shippingaddress } = data;

      const savedShippingAddress = await trx.shippingAddress.create({
        data: shippingaddress,
      });

      const savedOrder = await trx.order.create({
        data: {
          client,
          totalPrice: orderItems.reduce(
            (acc, item) => acc + item.unitPrice * item.quantity,
            0
          ),
          shippingAddress: {
            connect: {
              id: savedShippingAddress.id,
            },
          },
        },
        include: {
          shippingAddress: true,
        },
      });

      const savedOrderItems = await Promise.all(
        orderItems.map((item) =>
          trx.orderItems.create({
            data: {
              ...item,
              orderId: savedOrder.id,
            },
            include: {
              order: {
                include: {
                  shippingAddress: true,
                },
              },
            },
          })
        )
      );

      return {
        ...savedOrder,
        items: savedOrderItems,
      };
    });
  }

  async findById(id: number): Promise<Order | null> {
    return prisma.order.findFirst({
      where: { id },
      include: {
        shippingAddress: true,
        items: true,
      },
    });
  }
}
