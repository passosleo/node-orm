import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../db/datasource";
import { Order } from "../entities/order";
import { ShippingAddress } from "../entities/shipping-address";
import { OrderItems } from "../entities/order-items";
import { CreateOrderDTO } from "../services/order-types";

export class OrderRepository {
  private repository: Repository<Order>;
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.repository = AppDataSource.getRepository(Order);
    this.dataSource = dataSource;
  }

  async createOrderTransaction(data: CreateOrderDTO): Promise<Order> {
    return this.dataSource.transaction(async (manager) => {
      const { client, items: orderItems, shippingaddress } = data;
  
      const addressRepository = manager.getRepository(ShippingAddress);
      const newShippingAddress = addressRepository.create(shippingaddress);
      await addressRepository.save(newShippingAddress);
  
      const order = new Order();
      order.client = client;
      order.totalPrice = orderItems.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
      );
      order.shippingAddress = newShippingAddress;
  
      const orderRepository = manager.getRepository(Order);
      const savedOrder = await orderRepository.save(order);
  
      const orderItemsRepository = manager.getRepository(OrderItems);
      const items = orderItems.map((item) => {
        const orderItem = orderItemsRepository.create({
          ...item,
          order: savedOrder,
        });
        return orderItem;
      });
      await orderItemsRepository.save(items);
  
      savedOrder.items = items;
      return savedOrder;
    });
  }

  async findById(id: number): Promise<Order | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["shippingAddress", "items"], 
    });
  }
}
