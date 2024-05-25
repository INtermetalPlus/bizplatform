import { create } from "zustand";


interface InitialFrameState {
    isFrame: boolean,
    closeFrame: () => void,
    openFrame: () => void,
}


export const useOrderFrames = create<InitialFrameState>((set) => ({
    isFrame: true,
    closeFrame: () => set({isFrame: false}),
    openFrame: () => set({isFrame: true})
}))