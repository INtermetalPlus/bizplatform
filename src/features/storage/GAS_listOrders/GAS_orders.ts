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
        const orderRequest = await axios.get('http://167.172.161.102:82/api/v1/orders/', {
            headers: {
                Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA`
            }
        })
        set({orders: orderRequest.data})
    }
}))