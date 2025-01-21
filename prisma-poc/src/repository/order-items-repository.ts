import { OrderItems } from "@prisma/client";
import { prisma } from "../db/prisma";

export class OrderItemsRepository {
  async create(items: OrderItems[]): Promise<void> {
    await prisma.orderItems.createMany({
      data: items,
    });
  }
}
