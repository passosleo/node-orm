import { Repository } from "typeorm";
import { AppDataSource } from "../db/datasource";
import { ShippingAddress } from "../entities/shipping-address";

export class ShippingAddressRepository {
  private repository: Repository<ShippingAddress>;

  constructor() {
    this.repository = AppDataSource.getRepository(ShippingAddress);
  }

  async create(shippingAddres: ShippingAddress): Promise<ShippingAddress> {
    return this.repository.save(shippingAddres);
  }
}
