import { create } from "zustand";
import axios from "axios";


interface APIState {
    orderRequest: () => Promise<void>
}


export const orderStore = create<APIState>(set => ({
    orderRequest: async () => {
        const request = await axios.post('http://167.172.161.102:82/api/v1/products/')
        set(request.data)
    }
}))