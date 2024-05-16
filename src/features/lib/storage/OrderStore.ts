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
    fetchOrders: () => Promise<void>
}


export const useOrders = create<OrdersApi>((set) => ({
    orders: [],
    fetchOrders: async () => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/orders/', {
            headers: {
                Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA'
            }
        }
    )
        set({orders: request.data})
    }
}))