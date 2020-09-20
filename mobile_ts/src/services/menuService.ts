import { api } from './apiService';

const ORDER_BASE_URL = 'pizzas';

export default class MenuService {
  static async getMenu() {
    const { data } = await api.get(ORDER_BASE_URL);
    return data;
  }
}
