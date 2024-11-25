// src/types/Product.ts
export interface Product {
    id: string;
    supermarket: string;
    search: string;
    title: string;
    price: number;
    unit?: [string, number];
    image: string;
    link: string;
    discountPrice: number;
    discountPriceUnit?: number;
}
