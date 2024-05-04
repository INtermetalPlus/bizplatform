import { create } from 'zustand';

// Интерфейс для региона
interface Region {
  id: number;
  region_name: string;
  country: number;
}

// Хук для работы с регионами
export const useRegionsStore = create((set) => ({
  fetchRegions: async (): Promise<Region[]> => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/regions/");
      const data: Region[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching regions:", error);
      return [];
    }
  },
}));
