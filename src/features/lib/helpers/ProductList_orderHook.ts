import { create } from "zustand";


interface InitialFrameState {
    isFrame: {[key: string]: boolean},
    closeFrame: (id: any) => void,
    openFrame: (id: any) => void,
}


export const useOrderFrames = create<InitialFrameState>((set) => ({
    isFrame: {},
    closeFrame: (id) => set((state) => ({
        isFrame: {...state.isFrame, [id]: false}
    })),
    openFrame: (id) => set((state) => ({
        isFrame: {...state.isFrame, [id]: true}
    }))
}))