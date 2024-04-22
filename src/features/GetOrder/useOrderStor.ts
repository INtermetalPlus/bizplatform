// /src/features/order/orderStore.ts
import create from 'zustand';
import axios from 'axios';
import { Order, OrderQueryParams } from './orderTypes';

interface OrderStoreState {
  orders: Order[];
  fetchOrders: (params?: OrderQueryParams) => Promise<void>;
}

const useOrderStore = create<OrderStoreState>((set) => ({
  orders: [],
  fetchOrders: async (params = {}) => {
    try {
      const response = await axios.get<Order[]>('http://167.172.161.102:82/api/v1/orders/', { params });
      set({ orders: response.data });
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  }
}));

export default useOrderStore;
