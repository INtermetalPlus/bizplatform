// services/api.ts

export interface ApplicationData {
    name: string;
    phone_number: string;
    comment: string;
    is_viewed: boolean;
    tariff: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: any;
}

export const sendApplication = async (data: ApplicationData): Promise<ApiResponse<any>> => {
    try {
        console.log('Sending request with data:', data);
        const response = await fetch('http://167.172.161.102:82/api/v1/tariff/application/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRFTOKEN': 'your-csrf-token-here'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log('Server response:', responseData);

        if (response.ok) {
            return { success: true, data: responseData };
        } else {
            return { success: false, error: responseData };
        }
    } catch (error) {
        console.error('Error while sending request:', error);
        return { success: false, error };
    }
};
