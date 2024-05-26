import { create } from "zustand";

interface InitialFrameState {
    isFrame: { [key: string]: boolean },
    closeFrame: (id: string) => void,
    openFrame: (id: string) => void,
}

export const useOrderFrames = create<InitialFrameState>((set) => ({
    isFrame: {},
    closeFrame: (id) => set((state) => ({
        isFrame: { ...state.isFrame, [id]: false }
    })),
    openFrame: (id) => set((state) => ({
        isFrame: { ...state.isFrame, [id]: true }
    }))
}));
