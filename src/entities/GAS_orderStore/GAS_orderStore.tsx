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
        const request = await axios.get('http://167.172.161.102:82/api/v1/orders/', {
            headers: {
                Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA'
            }
        })
        set({orders: request.data})
    },
    countries: [],
    fetchCountry: async () => {
        const request = await axios.get('http://167.172.161.102:82/api/v1/countries/', {
            headers: {
                Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA'
            }
        })
        set({countries: request.data})
    }
}))

export default GAS_orderStore