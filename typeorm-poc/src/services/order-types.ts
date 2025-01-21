interface CreateOrderDTO {
  client: string;
  shippingaddress: ShippingAddressDTO;
  items: OrderItemsDTO[];
}

interface ShippingAddressDTO {
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
}

interface OrderItemsDTO {
  productName: string;
  quantity: number;
  unitPrice: number;
}

export { CreateOrderDTO, ShippingAddressDTO, OrderItemsDTO };