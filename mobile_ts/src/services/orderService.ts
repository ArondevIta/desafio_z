import { api } from './apiService';

const ORDER_BASE_URL = 'orders';

export default class OrderService {
  static async getOrders() {
    const { data } = await api.get(ORDER_BASE_URL);
    return data;
  }
}
