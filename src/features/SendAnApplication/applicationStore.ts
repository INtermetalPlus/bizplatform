// applicationStore.ts

import create from 'zustand';
import { sendApplication, ApplicationData, ApiResponse } from '../SendAnApplication/api/api';

interface ApplicationState {
    name: string;
    phone: string;
    comment: string;
    isLoading: boolean;
    error: string | null;
    success: boolean;
    setName: (name: string) => void;
    setPhone: (phone: string) => void;
    setComment: (comment: string) => void;
    sendApplicationRequest: () => Promise<void>;
}

export const useApplicationStore = create<ApplicationState>((set, get) => ({
    name: "",
    phone: "",
    comment: "",
    isLoading: false,
    error: null,
    success: false,
    setName: (name: string) => set({ name }),
    setPhone: (phone: string) => set({ phone }),
    setComment: (comment: string) => set({ comment }),
    sendApplicationRequest: async () => {
        const { name, phone, comment } = get();
        set({ isLoading: true, error: null });

        const applicationData: ApplicationData = {
            name,
            phone_number: phone, // Renamed to match API schema
            comment,
            is_viewed: true, // Assuming default value
            tariff: 0 // Assuming default value
        };

        try {
            const response = await sendApplication(applicationData);

            if (response.success) {
                set({ success: true, isLoading: false });
            } else {
                set({ error: response.error || "An error occurred", isLoading: false });
            }
        } catch (error) {
            set({ error: "An error occurred", isLoading: false });
        }
    },
}));
