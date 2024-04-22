import create from 'zustand';
import axios from 'axios';

interface Order {
  id: string;
  phone_number: string;
  email: string;
  order_number: number;
  order_title: string;
  order_text: string;
  price: number;
  is_published: boolean;
  is_globalized: boolean;
  is_deleted: boolean;
  company: number;
  category: number;
  countries: number[];
  regions: number[];
  cities: number[];
  delivery_address: number[];
}

interface OrderStoreState {
  createOrder: (orderData: Order) => Promise<void>;
}

const AddProductStore = create<OrderStoreState>((set) => ({
  createOrder: async (orderData: Order) => {
    try {
      const response = await axios.post('http://167.172.161.102:82/api/v1/orders/', orderData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': 'm26gyqeG8KN2f61fCssFUx6VRySQZoB7B1glFLgBHMCjy6aunKVvKEMji0tW6AXO' // Ваш CSRF-токен
        }
      });
      console.log('Order created:', response.data);
    } catch (error) {
      console.error('Failed to create order:', error);
      throw error; // Пробросить ошибку для обработки в компоненте
    }
  }
}));

export default AddProductStore;
