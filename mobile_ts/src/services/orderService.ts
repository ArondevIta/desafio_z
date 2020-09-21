import { api } from './apiService';

const ORDER_BASE_URL = 'orders';

export default class OrderService {
  static async getOrders() {
    const { data } = await api.get(ORDER_BASE_URL);
    return data;
  }
  static async getOrder(id: number) {
    const { data } = await api.get(`${ORDER_BASE_URL}/${id}`);
    return data;
  }
}
