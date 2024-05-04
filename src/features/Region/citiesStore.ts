import { create } from 'zustand';

// Интерфейс для города
interface City {
  id: number;
  city_name: string;
  region: number;
}

// Хук для работы с городами
export const useCitiesStore = create((set) => ({
  fetchCities: async (): Promise<City[]> => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/cities/");
      const data: City[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  },
}));
