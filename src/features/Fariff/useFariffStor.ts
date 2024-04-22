import create from 'zustand';
import axios from 'axios';
 

interface Tariff {
  id: number;
  tariff_title: string;
  tariff_description: string;
  price_per_month: string;
}

interface TariffStoreState {
  tariffs: Tariff[];
  fetchTariffs: () => Promise<void>;
}

const useTariffStore = create<TariffStoreState>((set) => ({
  tariffs: [],
  fetchTariffs: async () => {
    try {
      const response = await axios.get<Tariff[]>('http://167.172.161.102:82/api/v1/tariff/');
      set({ tariffs: response.data });
    } catch (error) {
      console.error('Failed to fetch tariffs:', error);
    }
  }
}));

export default useTariffStore;
