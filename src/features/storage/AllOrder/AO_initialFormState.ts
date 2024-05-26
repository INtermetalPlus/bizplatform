export interface AO_initialFormState {
    id: string,
    company: number,
    order_title: string,
    order_text: string,
    category: number,
    regions: number[],
    // города поставки
    cities: number[],
    phone_number: string,
    email: string
}