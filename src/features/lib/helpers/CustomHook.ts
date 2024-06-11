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




interface InitialMainModalState {
    isMainModal: boolean,
    closeMainModal: () => void,
    openMainModal: () => void,
}


export const AO_mainModal = create<InitialMainModalState>((set) => ({
    isMainModal: false,
    closeMainModal: () => set({isMainModal: false}),
    openMainModal: () => set({isMainModal: true})
}))


// Sending Apllication Modal
interface InitialSAMState {
    SAM_modal: boolean,
    close_SAM_modal: () => void,
    open_SAM_modal: () => void
}


export const applicationModal = create<InitialSAMState>((set) => ({
    SAM_modal: false,
    close_SAM_modal: () => set({SAM_modal: false}),
    open_SAM_modal: () => set({SAM_modal: true})
}))


interface InitialTarrifState {
    isTarrifModal: Boolean;
    closeTarrifModal: () => void;
    openTarrifModal: () => void
}


export const SOP_tarrifModal = create<InitialTarrifState>((set) => ({
    isTarrifModal: false,
    closeTarrifModal: () => set({isTarrifModal: false}),
    openTarrifModal: () => set({isTarrifModal: true})
}))