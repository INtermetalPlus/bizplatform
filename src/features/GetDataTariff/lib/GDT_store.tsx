import { create } from "zustand";
import axios from "axios";

interface InitialState {
    id: number;
    tariff_title: string;
    tariff_description: string;
    price_per_month: number;
}

interface APIState {
    tariffState: InitialState[];
    tariffRequest: () => Promise<void>;
}

export const tariffStore = create<APIState>((set) => ({
    tariffState: [],
    tariffRequest: async () => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/tariff/');
        set({ tariffState: request.data });
    }
}));
