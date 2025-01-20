export interface OrderRepository {
  list(): Promise<string>;
}
