import { create } from "zustand";


interface initialState {
    isOpen: boolean,
    close: () => void,
    open: () => void
}


export const closeModal = create<initialState>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}))

export const closeApplicationModal = create<initialState>((set) => ({
    isOpen: false,
    close: () => set({isOpen: false}),
    open: () => set({isOpen: true})
}))


interface InitialState_Modal {
    isMainModal: boolean,
    closeMainModal: () => void,
    openMainModal: () => void,
}

export const AllOrder_mainModal = create<InitialState_Modal>((set) => ({
    isMainModal: false,
    closeMainModal: () => set({isMainModal: false}),
    openMainModal: () => set({isMainModal: true})
}))