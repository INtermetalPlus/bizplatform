import { create } from "zustand";
import axios from "axios";

interface InitialGAS_OrdersState {
  id: string;
  order_title: string;
  order_text: string;
  phone_number: string;
  price: number;
  regions: number[];
}

interface OrderAPI {
  orders: InitialGAS_OrdersState[];
  fetchOrder: (filters?: Filters) => Promise<void>;
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

interface Filters {
  categories: number[];
  priceGte: number | null;
  priceLte: number | null;
  search: string;
  existance: boolean | null;
}

export const orderListDataHook = create<OrderAPI>((set) => ({
  orders: [],
  filters: {
    categories: [],
    priceGte: null,
    priceLte: null,
    search: '',
    existance: null,
  },
  fetchOrder: async (filters = { categories: [], priceGte: null, priceLte: null, search: '', existance: null }) => {
    const params = {
      categories: filters.categories.join(','),
      price__gte: filters.priceGte,
      price__lte: filters.priceLte,
      search: filters.search,
      existance: filters.existance,
    };

    const orderRequest = await axios.get('http://167.172.161.102:82/api/v1/orders/', {
      headers: {
        Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA`,
      },
      params,
    });
    set({ orders: orderRequest.data });
  },
  setFilters: (filters) => set({ filters }),
}));
