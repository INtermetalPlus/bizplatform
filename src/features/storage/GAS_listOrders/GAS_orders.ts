import { create } from "zustand";
import axios from "axios";


interface InitialGAS_OrdersState {
    id: string,
    order_title: string,
    order_text: string,
    phone_number: string,
    price: number,
    regions: number[]
}


interface OrderAPI {
    orders: InitialGAS_OrdersState[],
    fetchOrder: () => Promise<void>
}


export const orderListDataHook = create<OrderAPI>((set) => ({
    orders: [],
    fetchOrder: async () => {
        const orderRequest = await axios.get('http://167.172.161.102:82/api/v1/orders/')
        set({orders: orderRequest.data})
    }
}))