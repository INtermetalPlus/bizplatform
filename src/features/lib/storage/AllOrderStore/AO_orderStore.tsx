import axios from "axios";
import { create } from "zustand";
import { AO_ShippingFormState } from "./AO_ShippingformState";


interface InitialState {
    fetchOrder: (formData: AO_ShippingFormState) => Promise<void>
}


export const AO_mainModalStore = create<InitialState>((set) => ({
    fetchOrder: async (formData) => {
        const requestOrder = await axios.post('http://167.172.161.102:82/api/v1/orders/',
            formData,
            {
                headers: {
                    Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA`
                }
            }
        )
        set(requestOrder.data)
    }
}))