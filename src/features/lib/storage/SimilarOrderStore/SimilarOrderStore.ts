import { create } from "zustand";


interface Order {
    id: string,
    created_at: string
    order_number: number,
    order_title: string,
    order_text: string
    category: number,
    cities: number[],
    delivery_address: number[]
}


interface SimilarOrderState {
    similarOrder: Order[],
    addOrder: (order: Order) => void,
    removeOrder: (order: Order) => void
}


export const useSimilarStore = create<SimilarOrderState>((set) => ({
    similarOrder: [],
    addOrder: (order: Order) => set((state) => ({
		similarOrder: state.similarOrder.length < 1 ? [...state.similarOrder, order] : state.similarOrder
	})),
    removeOrder: (order: Order) => set((state) => ({
        similarOrder: state.similarOrder.filter(filerOrder => filerOrder.id !== order.id)
    }))
}))

