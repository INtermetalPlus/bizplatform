import create from 'zustand';

type State = {
  product: any;
  setProduct: (product: any) => void;
  addProduct: (product: any) => Promise<void>;
};

const useStore = create<State>((set) => ({
  product: {},
  setProduct: (product) => set({ product }),
  addProduct: async (product) => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/products/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Product added successfully:", data);
      set({ product: data });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },
}));

export default useStore;


