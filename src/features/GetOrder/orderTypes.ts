// /src/features/order/orderTypes.ts
export interface Order {
    id: string;
    created_at: string;
    updated_at: string;
    phone_number: string;
    email: string;
    order_number: number;
    order_title: string;
    order_text: string;
    price: number;
    is_published: boolean;
    is_globalized: boolean;
    is_deleted: boolean;
    company: number;
    category: string;
    countries: number[];
    regions: number[];
    cities: number[];
    delivery_address: number[];
  }
  
  export interface OrderQueryParams {
    category?: string;
    countries?: number[];
    order_number?: number;
    order_title__icontains?: string;
    price__gte?: number;
    price__lte?: number;
    search?: string;
  }

 
  