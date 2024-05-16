import { boolean } from "yup";
import { create } from "zustand";


interface InitialState {
    isOpen: boolean,
    close: () => void,
    open: () => void
}


export const closeModal = create<InitialState>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}))

export const closeApplicationModal = create<InitialState>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}))



interface OrderStatus {
    isViewed: any,
    show: (id: string) => void,
    hide: (id: string) => void,
}


export const hideViewed = create<OrderStatus>((set) => ({
    isViewed: {},
    show: (id) => set((state) => ({isViewed: {...state.isViewed, [id]: true}})),
    hide: (id) => set((state) => ({isViewed: {...state.isViewed, [id]: false}})),
}))

