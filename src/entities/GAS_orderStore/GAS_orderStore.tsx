import axios from "axios";
import { create } from "zustand";


interface Order {
    id: string,
    order_title: string,
    order_text: string,
    countries: number
}

interface Country {
    id: number,
    country_name: string
}


interface initialState {
    orders: Order[],
    countries: Country[],
    fetchOrder: () => Promise<void>,
    fetchCountry: () => Promise<void>
}


const GAS_orderStore = create<initialState>((set) => ({
    orders: [],
    fetchOrder: async () => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/orders/')
        set({orders: request.data})
    },
    countries: [],
    fetchCountry: async () => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/countries/')
        set({countries: request.data})
    }
}))

export default GAS_orderStore