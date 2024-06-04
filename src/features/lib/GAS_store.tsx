import { create } from "zustand";
import axios from "axios";

interface InitialGAS_ProductsState {
  id: string;
  product_name: string;
  product_description: string;
  characteristics: string;
  price: number;
  existance: boolean;
  categories: number[];
  company: number;
  currency: number;
}

interface ProductsAPI {
  products: InitialGAS_ProductsState[];
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

export const Products = create<ProductsAPI>((set) => ({
  products: [],
  filters: {
    categories: [],
    priceGte: null,
    priceLte: null,
    search: '',
    existance: null,
  },
  fetchOrder: async (filters = { categories: [], priceGte: null, priceLte: null, search: '', existance: null }) => {
    const params: { [key: string]: any } = {
      categories: filters.categories.join(','),
      price__gte: filters.priceGte,
      price__lte: filters.priceLte,
      search: filters.search,
      existance: filters.existance,
    };

    // Remove parameters with null or empty values
    Object.keys(params).forEach(key => {
      if (params[key] === null || params[key] === '' || params[key] === undefined || (Array.isArray(params[key]) && params[key].length === 0)) {
        delete params[key];
      }
    });

    console.log("Fetching products with params:", params);

    try {
      const orderRequest = await axios.get('http://167.172.161.102:82/api/v1/products/', {
        headers: {
          Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA`,
        },
        params,
      });

      console.log("Products fetched successfully:", orderRequest.data);
      set({ products: orderRequest.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  setFilters: (filters) => set({ filters }),
}));

// Вызов fetchOrder и передача фильтров
const fetchData = async () => {
  const filters = {
    categories: [1, 2], // Пример фильтров
    priceGte: 100,
    priceLte: 1000,
    search: 'example',
    existance: true,
  };

  try {
    await Products.getState().fetchOrder(filters);
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
};

fetchData();
