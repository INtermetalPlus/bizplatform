import { create } from "zustand";
import axios from "axios";
import { ShippingProductData } from "@/widgets/GAS_ModalWindow/ShippingProductData";


interface ProductsRequest {
    fetchOrder: (formData: ShippingProductData) => Promise<void>
}


export const productsStore = create<ProductsRequest>(set => ({
    fetchOrder: async (formData) => {
        const productRequest = await axios.post('http://167.172.161.102:82/api/v1/products/', 
        formData,
        {
            headers: {
                Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo3NzE0NjQwNTE4LCJpYXQiOjE3MTQ2NDA1MDAsImp0aSI6ImE4NjUzYzlhOGRjNTQ0YTM4Yzk3NDNmNzU2NzljOGMyIiwidXNlcl9pZCI6MTB9.5zNV6f2gtSJcxg6GpxS5AcXtfFsWacQqEdpu01yNJdA`
            }
        }
        )
        set(productRequest.data)
    },
}))