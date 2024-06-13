import { create } from "zustand";
import axios from "axios";


interface Orders {
    id: string,
    order_number: number,
    order_title: string,
    order_text: string
}


interface OrdersApi {
    orders: Orders[],
    fetchOrders: (token:string) => Promise<void>
}


export const useOrders = create<OrdersApi>((set) => ({
    orders: [],
    fetchOrders: async (token:string) => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/orders/', {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
    )
        set({orders: request.data})
    }
}))