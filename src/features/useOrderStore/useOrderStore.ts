// useProductStore.ts
import create from "zustand";

interface Product {
  name: string;
  price: string;
  description: string;
  location: string;
  contact: string;
  company: string

}

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/products/");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: Product[] = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));
