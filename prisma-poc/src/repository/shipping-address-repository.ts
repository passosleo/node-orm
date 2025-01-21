import { ShippingAddress } from "@prisma/client";
import { prisma } from "../db/prisma";

export class ShippingAddressRepository {
  async create(shippingAddres: ShippingAddress): Promise<ShippingAddress> {
    return prisma.shippingAddress.create({
      data: shippingAddres,
    });
  }
}
