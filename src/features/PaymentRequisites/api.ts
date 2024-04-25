import create from 'zustand';
import { toast } from "react-toastify";

export const useStore = create(set => ({
  data: null,
  loadData: async () => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/payment-requisites");
      const data = await response.json();
      set({ data: data[3] });
    } catch (error) {
      toast.error("Ошибка загрузки данных");
    }
  },
}));
