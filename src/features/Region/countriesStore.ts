import { create } from 'zustand';

// Интерфейс для страны
interface Country {
  id: number;
  country_name: string;
}

// Хук для работы со странами
export const useCountriesStore = create((set) => ({
  fetchCountries: async (): Promise<Country[]> => {
    try {
      const response = await fetch("http://167.172.161.102:82/api/v1/countries/");
      const data: Country[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching countries:", error);
      return [];
    }
  },
}));
